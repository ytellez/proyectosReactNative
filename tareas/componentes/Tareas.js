import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign'

export default function Tareas({tarea, id, completada, eliminar, completarTarea}) {

  return (
    <View style={[styles.contenedor, completada ? null : styles.tachada]}>
      <Text 
        onPress={()=>completarTarea(id)} 
        style={[styles.texto, completada ? null : styles.textoTachado]}>
        {tarea}
      </Text>
      <View style={styles.contenendorIcono}>
        <AntDesign onPress={()=>eliminar(id)} name='close' style={styles.icono}></AntDesign>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    contenedor:{
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 50,
        marginTop:5,
        backgroundColor:'rgba(167, 27, 120, 0.4)',
        paddingStart:15,
        paddingEnd:5,
        borderRadius:5,
        flexDirection:'row',
    },
    texto:{
        paddingVertical:10,
        flex: 8,
        fontSize: 16,
        color: '#000',
        fontWeight:'bold', 
        fontSize: 16,
        color: '#000',
        fontWeight:'bold',
       
    },
    textoTachado:{
      textDecorationLine: 'line-through',
      textDecorationStyle: 'solid',
    },

    tachada: {
      backgroundColor:'#8CF7AA',
    },

    icono:{
      color:'black', 
      fontSize:35, 
    },
    contenendorIcono:{
      flex:1,
      alignItems:'flex-end',
    }
}
);