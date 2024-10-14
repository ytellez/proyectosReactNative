import React from "react";
import {StyleSheet, Text, Image, View,  Dimensions} from "react-native"

function Testimonios({nombre, pais, cargo, empresa, foto, testimonio}){
    return(
        <View style={styles.contenedorPrincipal}>
            <View style={styles.contenedorFoto}>
                <Image style={styles.foto} source={foto}/>
            </View>
            <View style={styles.contenedorTexto}> 
                <Text style={styles.datos}> <Text style={{fontWeight:'bold'}}>{nombre}</Text>  en {pais}</Text>
                <Text style={styles.datos}>{cargo} en <Text style={{fontWeight:'bold'}}>{empresa}</Text></Text>
                <Text style={styles.testimonio}>{testimonio}</Text>
            </View>
        </View>
    );
};


export default Testimonios;

const styles = StyleSheet.create({
    contenedorPrincipal:{
      flex:1,
      flexDirection:'row',
      minHeight:250,
      backgroundColor:'#fff',
      marginVertical:10,
      //Sombra
      shadowColor: "#000",

      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,

      elevation: 5,
    },
    contenedorFoto:{
      alignSelf:'center',
      flex:1
    },
    foto:{
      height:250,
      width:'100%',
    },
    contenedorTexto:{
      flex:2,
      marginHorizontal:15, 
      alignSelf:'center',
    },
    datos:{
      textAlign:'center',
      fontSize:15,
      marginVertical:3,
    },
    testimonio:{
      textAlign:'justify',
      fontSize:14,
      marginVertical:15,
    },
});