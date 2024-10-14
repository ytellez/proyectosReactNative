import React, { useState } from 'react';
import { StyleSheet, View,  Image} from 'react-native';
import Contador from './componentes/Contador';
import Boton from './componentes/Boton';


export default function App() {

  const [count, setCount] = useState(0);

  const incrementar = () =>{
    setCount(count + 1)
  };

  const reiniciar = () => {
    setCount(0);
  }

  return (
    <View style={styles.container}>
      <View style={styles.contenedorLogo}>
        <Image style={styles.imagen} source={require('./imagenes/logofreeCode.png')}></Image>
      </View>
      <View style={styles.contenedorContador}>
       <Contador count={count}></Contador>
       <Boton texto={'Clic'} accion={incrementar}></Boton>
       <Boton texto={'Reiniciar'} accion={reiniciar}></Boton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#030033',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contenedorLogo:{
    flex:1,
    justifyContent:'flex-end',
  },
  imagen:{
    width:350,
    height:40,
  },
  contenedorContador:{
    flex:3,
  },

});
