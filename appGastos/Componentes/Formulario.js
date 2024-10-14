import { View, Text, TextInput, StyleSheet, TouchableHighlight, TouchableOpacity } from 'react-native'
import React from 'react';
import uuid from 'react-native-uuid';
import { useState, useEffect } from 'react';


export default function Formulario({guardarDatos, indexEdit, datos, texto}) {

  const [nombreGasto, setNombreGasto]=useState("");
  const [gasto, setGasto]=useState(0);

  useEffect(() => {
    if (indexEdit !== null) {
      setNombreGasto(datos[indexEdit].nomGasto)
      setGasto(datos[indexEdit].costoGasto.toString())
    }
  }, [indexEdit]);

  const enviarDatos = ()=>{
    if ((!nombreGasto)||(!gasto)||(gasto<=0)) return
    if (indexEdit===null){
         const nuevoGasto = {
          id:uuid.v4(),
          nomGasto:nombreGasto,
          costoGasto:gasto,
        }
        guardarDatos(nuevoGasto);
      }else{
        const nuevoGasto2 = {
          nomGasto:nombreGasto,
          costoGasto:gasto,
        }
        guardarDatos(nuevoGasto2);
      }
   
    setGasto("");
    setNombreGasto("");
  }

  return (
    <View style={styles.contenedor}>
      <Text style={styles.texto}>Añade tus gastos</Text>
      <TextInput 
        style={styles.cajaTexto} 
        onChangeText={setNombreGasto} 
        placeholder='Nombre del gasto. Ej. Transporte'
        value={nombreGasto}>
      </TextInput>
      <TextInput 
        style={styles.cajaTexto} 
        onChangeText={setGasto} 
        placeholder='Cantidad del gasto. Ej. 100' 
        keyboardType='numeric'
        value={gasto}>   
      </TextInput>
      <TouchableOpacity style={styles.boton} onPress={enviarDatos}>
        <Text style={styles.textoBoton}>{texto}</Text>
      </TouchableOpacity>

    </View>
  )
}

const styles= StyleSheet.create({
    contenedor:{
        width:'100%',
        alignItems:'center',
    },
    texto:{
        fontSize:30,
        fontWeight:'bold',
        fontFamily:'Roboto',
        alignSelf:'flex-start',
        marginLeft:25,
        
    },
    cajaTexto:{
        width:'90%',
        height:50,
        paddingHorizontal:15,
        borderColor:'gray',
       
        marginVertical:7,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 1.5,
    },
    boton:{
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#B7275E',
        width:'90%',
        height:50,
        marginTop:5,
    },
    textoBoton:{
        color:'#fff',
        fontWeight:'bold',
    }
});