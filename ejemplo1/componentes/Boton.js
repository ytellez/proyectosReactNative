import { View, Text, Button, StyleSheet, Touchable, TouchableOpacity } from 'react-native'


export default function Boton(props) {
  return (
    <View>
      <TouchableOpacity 
        style={[styles.boton, props.esBotonDeClic ? styles.boton2 : null]} 
        onPress={props.manejarClic}>
        <Text style={styles.texto}>{props.texto}</Text>
      </TouchableOpacity>
    </View>
  )
};

const styles= StyleSheet.create({
  boton:{
    marginTop:15,
    width:200,
    height:60,
    alignSelf:'center',
    backgroundColor:'green',
    borderRadius: 10,
    borderColor: '#fff',
    borderWidth:2,
    justifyContent:'center',
  },
  boton2:{
    backgroundColor:'blue',
  },
  texto:{
    textAlign:'center',
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold',
  }
});

