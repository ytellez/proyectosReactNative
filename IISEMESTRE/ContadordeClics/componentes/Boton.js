import { View, Text, StyleSheet, TouchableHighlight } from 'react-native'
import React from 'react'

export default function Boton({texto, accion}) {
  return (
    <View>
      <TouchableHighlight style={[styles.botones, texto =='Clic' ? styles.boton1 : styles.boton2]} 
        onPress={accion}>
          <Text style={styles.textoBoton}>{texto}</Text>
        </TouchableHighlight> 
    </View>
  )
};

const styles = StyleSheet.create({
botones:{
    borderColor:'white',
    borderWidth:1,
    height:50,
    marginBottom:10,
    borderRadius:10,
    alignItems:'center',
    justifyContent:'center',
  },
  boton1:{
    backgroundColor:'#2427c4',
  },
  boton2:{
    backgroundColor:'#0d7139',
  },

  textoBoton:{
    fontSize:20,
    color:'white',
    fontWeight:'bold',
  },
});