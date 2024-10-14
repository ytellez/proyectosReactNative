import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

export default function HomeScreen() {

  const navigation=useNavigation();
  return (
    <View style={styles.contenedorPrincipal}>
      <Text style={{fontSize:30}}>HomeScreen</Text>
        <TouchableOpacity 
          onPress={()=>navigation.navigate("Stack1")}
          style={styles.boton}>
              <Text style={styles.texto}>Ir a Stack 1</Text>
          </TouchableOpacity>
    </View>
  )
};
const styles = StyleSheet.create({
    contenedorPrincipal:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    boton:{
      backgroundColor:'pink',
      height:30,
      width:100,
      borderColor:'black',
      borderWidth:2,
      borderRadius:5,
      
    },
    texto:{
        color:'black',
        fontWeight:'bold',
        size:24,
        alignSelf:'center',
    },
});