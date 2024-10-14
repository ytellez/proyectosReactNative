import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, Text, View } from 'react-native';

export default function Testimonio(props) {
  return (
    
    <View style={styles.container}>
        <Image 
          style={styles.imagen}
          source={props.imagen}/>
        <Text style={styles.titulo}> {props.nombre}</Text>
        <Text> {props.testimonio}</Text>  
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F0FFF0',
    alignItems: 'center',
    justifyContent:'center',
    margin: 10,
    borderStyle: 'dotted',
  },

  titulo:{
    fontFamily: 'Roboto',
    fontSize: 20,
    fontWeight: 'bold'
  },
  imagen:{
    height:100,
    width:100,
  }
});
