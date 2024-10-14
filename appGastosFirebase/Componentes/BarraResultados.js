import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function BarraResultados({res}) {
  return (
    <View style={styles.contenedor}>
      <Text style={styles.textoPresupuesto}>Presupuesto: $100</Text>
      <Text style={styles.textoPresupuesto}>Restante: ${res}</Text>
    </View>
  )
}

const styles=StyleSheet.create({
    contenedor:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
    },
    textoPresupuesto:{
        fontWeight:'bold',
        height:50,
        width: 170,
        textAlignVertical:'center',
        textAlign:'center',
        borderColor:'gray',
        borderWidth:1,
    },
});