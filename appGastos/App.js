import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Formulario from './Componentes/Formulario';
import ListadoGastos from './Componentes/ListadoGastos';
import { useState } from 'react';
import BarraResultados from './Componentes/BarraResultados';

export default function App() {

  const [datos, setDatos] = useState([]);
  const [presupuesto, setPresupuesto] = useState(100);
  const [indexEdit, setIndexEdit] = useState(null);

  const guardarDatos = (nuevoGasto) => {
    nuevoGasto.costoGasto = parseInt(nuevoGasto.costoGasto)
    if (indexEdit !== null) {
      if ((presupuesto + datos[indexEdit].costoGasto - nuevoGasto.costoGasto) >= 0) {
        setPresupuesto(presupuesto + datos[indexEdit].costoGasto - nuevoGasto.costoGasto);
        datos[indexEdit].nomGasto = nuevoGasto.nomGasto
        datos[indexEdit].costoGasto = nuevoGasto.costoGasto
        setIndexEdit(null);
      }
      else {
        alert('Saldo insuficiente');
      }
    } else {
      if ((presupuesto - nuevoGasto.costoGasto) >= 0) {
        setDatos([...datos, nuevoGasto]);
        setPresupuesto(presupuesto - nuevoGasto.costoGasto);
      }
      else {
        alert('Saldo insuficiente');
      }
    }
    
  }

  const eliminarDatos = (id, gasto) => {
    const datosActualizados = datos.filter(d => id !== d.id)
    setDatos(datosActualizados);
    setPresupuesto(presupuesto + gasto);
  }

  const editarDatos = (index) => {
    setIndexEdit(index);
  }

return (
  <>
  <View style={styles.containerPrincipal}>
    <View style={styles.contenedorForm}>
      <Formulario
        guardarDatos={guardarDatos}
        indexEdit={indexEdit}
        datos={datos}
        texto={indexEdit == null ? "Guardar Datos" : "Editar Datos"}
      ></Formulario>
    </View>
    <View style={styles.contenedorLista}>
      <Text style={styles.tituloLista}>Lista gastos</Text>
      <ScrollView>
        {datos.map((i, index) => {
          return (
            <ListadoGastos
              id={i.id}
              key={i.id}
              indexEdit={index}
              nombre={i.nomGasto}
              gasto={i.costoGasto}
              eliminarDatos={eliminarDatos}
              editarDatos={editarDatos}>
            </ListadoGastos>
          )
        })}
      </ScrollView>
    
    </View>
  </View>
   <View style={styles.contenedorBarra}>
    <BarraResultados
      res={presupuesto}
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
    backgroundColor:'white'

  },
  scroll: {
    flex:1,
    marginBottom:50,
  }
});

