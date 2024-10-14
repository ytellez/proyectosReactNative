import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import Contador from './componentes/Contador.js';
import Boton  from './componentes/Boton.js';
import React, {useState} from 'react';

export default function App() {
  const [contador, setCount] = useState(0);
  const contarClic = () => setCount(contador+1);

  return (
    <View style={styles.container}>
      <View style={styles.contenedor_logo}>
        <Image
          style={styles.logo}
          source={require('./src/imagenes/freecodecamp-logo.png')}
        />
      </View>
      <View style={styles.contenedor_contador}>
        <Contador dato={contador}></Contador>
        <Boton 
          texto='Clic'
          esBotonDeClic={true}
          manejarClic={contarClic}>
         </Boton>
        <Boton
          texto='Reiniciar'
          esBotonDeClic={false}
          manejarClic={()=>{setCount(0)}}
        ></Boton>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1b1b32',
    alignItems: 'center',
    justifyContent: 'center',
   
  },
  titulo:{
    color: '#000',
  },
  contenedor_logo:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  contenedor_contador:{
    flex:3,
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginHorizontal: 16,
  },
  logo:{
    height:35,
    width:300,
  }
});
