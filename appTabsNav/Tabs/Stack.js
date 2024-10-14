import { View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import React from 'react';
import {useNavigation} from '@react-navigation/native';

export default function Stack() {
    const navigation=useNavigation();
    return (
        <View style={styles.container}>
             <Text style={{fontSize:30}}>Stack1</Text>
            <TouchableOpacity 
                onPress={()=>navigation.navigate("Stack2")}
                style={styles.boton}>
                     <Text style={styles.texto}>Ir a Stack 2</Text>
            </TouchableOpacity>
    </View>
  )
};
const styles = StyleSheet.create({
    container:{
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
        size:14,
        alignSelf:'center',
    },
});