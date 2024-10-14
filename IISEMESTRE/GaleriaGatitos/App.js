import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.tituloText}>Galería de fotos de gatitos</Text>
      <ScrollView>
        <Image style={styles.gato} source={require('./IMAGENES/1.jpg')} />
        <Text style={{fontSize:12, color:'blue'}}>Gatitos abrazados</Text>
        <Image style={styles.gato} source={require('./IMAGENES/2.jpg')} />
        <Text style={{fontSize:12, color:'blue'}}>Gatito triste</Text>
        <Image style={styles.gato} source={require('./IMAGENES/3.jpg')} />
        <Text style={{fontSize:12, color:'blue'}}>Peluchito</Text>
        <Image style={styles.gato} source={require('./IMAGENES/4.jpg')} />
        <Text style={{fontSize:12, color:'blue'}}>Gatito naranja</Text>
        <Image style={styles.gato} source={require('./IMAGENES/5.jpg')} />
        <Text style={{fontSize:12, color:'blue'}}>Gatitos en canasto</Text>
      </ScrollView>
       <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop:30,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  gato:{
    marginTop:10,
    borderRadius:5,
    width:300,
    height:300,
  },
  tituloText: {    
    fontSize: 20,
    fontWeight: 'bold',
  },
});
