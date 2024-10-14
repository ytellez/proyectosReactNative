import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react';
import uuid from 'react-native-uuid';
import { useState, useEffect } from 'react';


export default function Formulario({ guardarDatos, id, datos, texto }) {

  useEffect(() => {
    if (id !== null) {
      datos.map((i)=>{
        if(i.id===id){
          i.costoGasto=(i.costoGasto).toString();
          setGastos({nombreGasto:i.nombreGasto, costoGasto:i.costoGasto})
        }     
      });
    }
  }, [id]);

  const [gastos, setGastos] = useState({
    nombreGasto:"",
    costoGasto:""
  });
 
  const cambiarTexto = (nombre, value) =>{
    setGastos({...gastos, [nombre]:value})
  }

  const enviarDatos = () => {
    if ((!gastos.nombreGasto) || (!gastos.costoGasto) || (gastos.costoGasto <= 0)) return
    if (id===null){
      gastos.id=uuid.v4()
      guardarDatos(gastos);
    }else{
      guardarDatos(gastos);
    }
    setGastos({nombreGasto:"", costoGasto:""})
   
  }

  return (
    <View style={styles.contenedor}>
      <Text style={styles.texto}>Añade tus gastos</Text>
      <TextInput
        style={styles.cajaTexto}
        onChangeText={(value)=>cambiarTexto("nombreGasto",value)}
        placeholder='Nombre del gasto. Ej. Transporte'
        value={gastos.nombreGasto}>
      </TextInput>
      <TextInput
        style={styles.cajaTexto}
        onChangeText={(value)=>cambiarTexto("costoGasto",value)}
        placeholder='Cantidad del gasto. Ej. 100'
        keyboardType='numeric'
        value={gastos.costoGasto}>
      </TextInput>
      <TouchableOpacity style={styles.boton} onPress={enviarDatos}>
        <Text style={styles.textoBoton}>{texto}</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  contenedor: {
    width: '100%',
    alignItems: 'center',
  },
  texto: {
    fontSize: 30,
    fontWeight: 'bold',
    fontFamily: 'Roboto',
    alignSelf: 'flex-start',
    marginLeft: 25,

  },
  cajaTexto: {
    width: '90%',
    height: 50,
    paddingHorizontal: 15,
    borderColor: 'gray',

    marginVertical: 7,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 1.5,
  },
  boton: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#B7275E',
    width: '90%',
    height: 50,
    marginTop: 5,
  },
  textoBoton: {
    color: '#fff',
    fontWeight: 'bold',
  }
});