import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

export default function Testimonio(props) {
  return (
    <View style={styles.contenedor}>
      <Text style={styles.nombre}> {props.nombre} en {props.pais}</Text>
      <Text style={styles.cargo}> {props.cargo} en {props.empresa}</Text>
      <Text style={styles.testimonio}> {props.testimonio}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    contenedor:{
        margin: 10,
        minHeight:200,
        alignItems:'center',
        justifyContent:'center'
    },
  
    nombre:{
        textAlign:'center',
        fontSize:16,
        fontWeight:'bold',
        
    },
    cargo:{
      marginTop:5,
      textAlign:'center',
      fontSize: 14,
      fontWeight:'bold',
      
  },
  testimonio:{
      marginTop:5,
      textAlign:'center',
      fontSize:13,
  
  }
})