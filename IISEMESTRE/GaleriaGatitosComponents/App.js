import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Gatito from './COMPONENTES/Gatito';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.tituloText}>Galería gatitos</Text>
      <ScrollView>
        <Gatito 
          nombre='Gatitos abrazados' 
          imagen={require('./IMAGENES/1.jpg')}
        ></Gatito>
        <Gatito 
          nombre='Gatito Lindo' 
          imagen={require('./IMAGENES/2.jpg')}
        ></Gatito>
          <Gatito 
          nombre='Gatito Gris' 
          imagen={require('./IMAGENES/3.jpg')}
        ></Gatito>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop:30,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tituloText: {    
    fontSize: 25,
    fontWeight: 'bold',
  },

});
