import {View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Contador(props) {
  return (
    <View style={styles.contador}>
      <Text style={styles.texto}>{props.dato}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    contador:{
        minWidth: 200,
        height:200,
        borderWidth:3,
        borderColor:'#fff',
        marginTop:50,
        alignItems:'center',
        justifyContent:'center',
    },
    texto:{
        fontFamily: 'Roboto',
        color:'#fff',
        fontSize: 120,
    }
});