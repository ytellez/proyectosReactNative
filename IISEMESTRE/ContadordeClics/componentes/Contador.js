import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Contador({count}) {
  return (
    <View style={styles.contador}>
      <Text style={styles.textoContador}>{count}</Text>
    </View>
  )
};

const styles = StyleSheet.create({
    textoContador:{
      fontSize: 100, 
      marginBottom:10, 
      color:'white', 
      fontWeight:'bold'
    },
    contador:{
      marginTop:30,
      alignItems:'center',
      justifyContent:'center',
      borderWidth:2,
      borderColor:'white',
      height:250,
      width:250,
      marginBottom:25,
    },
  });