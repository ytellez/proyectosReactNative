import { ScrollView, StyleSheet, ActivityIndicator, Text, View, Button } from 'react-native';
import { useState, useEffect } from 'react';
import Formulario from './Componentes/Formulario';
import BarraResultados from './Componentes/BarraResultados';
import ListaGastos from './Componentes/ListadoGastos';


import { collection, 
    getFirestore, 
    query, where, 
    doc, setDoc,
    deleteDoc, getDoc, 
    updateDoc,
    getDocs } from "firebase/firestore";
import appFirebase from './BASEDEDATOS/Firebase';

const db = getFirestore(appFirebase);

export default function App() {

  const [datos, setDatos] = useState([]);
  const [id, setId]=useState(null);
  const [presu, setPresu]=useState(100);
  const [costoEdit, setCostoEdit]=useState(0);
  const [loading, setLoading]=useState(true);

  useEffect(() => {
    recibirDatos();
    obtenerSuma();
  }, [datos]);

const recibirDatos = async () => {
    const q = query(collection(db, "Gastos"));
    const querySnapshot = await getDocs(q);
    const d = [];
    querySnapshot.forEach((doc) => {
      const datosBD = doc.data()
      d.push(datosBD)
    });
    setDatos(d)
    setLoading(false);
  }
  const obtenerSuma=()=>{
  const totalGasto = datos.reduce((accumulator,item) => {
      return accumulator += item.costoGasto;
    }, 0);
    setPresu(100-totalGasto);
  }

  const guardarNuevoGasto = async (nuevoGasto) => {
    nuevoGasto.costoGasto=parseInt(nuevoGasto.costoGasto)
    if (id === null){
      if ((presu - nuevoGasto.costoGasto) >= 0) {
        await setDoc(doc(db, "Gastos", nuevoGasto.id), nuevoGasto);
      }
      else alert('saldo insuficiente')  
    } else {
      if ((presu + costoEdit - nuevoGasto.costoGasto) >= 0){
        const datoRef = doc(db, "Gastos", id);
        await updateDoc(datoRef, {
          nombreGasto: nuevoGasto.nombreGasto,
          costoGasto: nuevoGasto.costoGasto
        });
      }
      else  alert('saldo insuficiente')    
    }
    setId(null);
  }

  const eliminarGasto = async (id) => {
    await deleteDoc(doc(db, "Gastos", id));
  }

  const obtenerCosto = async(id) =>{
    const q = query(collection(db, "Gastos"), where("id", "==",id));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      setCostoEdit(doc.data().costoGasto)
    });
  }
  
  const cambiarId = (id)=>{
    setId(id);
    obtenerCosto(id);
  }
  return (
    <>
      <View style={styles.containerPrincipal}>
        <View style={styles.contenedorForm}>
          <Formulario
            guardarDatos={guardarNuevoGasto}
            id={id}
            datos={datos}
            texto={id == null ? "Guardar Datos" : "Editar Datos"}
          ></Formulario>
        </View>
        <View style={styles.contenedorLista}>
          <Text style={styles.tituloLista}>Lista gastos</Text>
          <ActivityIndicator size="large" color="#00ff00" 
          hidesWhenStopped={true} animating={loading}/>
          <ListaGastos 
            datos={datos} 
            eliminarGasto={eliminarGasto}
            cambiarId={cambiarId}
          ></ListaGastos>
        </View>
      </View>
      <View style={styles.contenedorBarra}>
        <BarraResultados
          res={presu}
        ></BarraResultados>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  containerPrincipal: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 50,
  },
  contenedorForm: {
    width: '100%',

  },
  contenedorLista: {
    width: "100%",

  },
  tituloLista: {
    fontSize: 30,
    fontWeight: 'bold',
    fontFamily: 'Roboto',
    marginLeft: 25,
    paddingTop: 10,

  },
  contenedorBarra: {
    justifyContent: 'flex-end',
    marginHorizontal: 20,
    height: 80,
    paddingHorizontal: 15,
    backgroundColor: 'white'

  },
  scroll: {
    flex: 1,
    marginBottom: 50,
  },
});

