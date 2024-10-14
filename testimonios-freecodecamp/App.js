
import { ScrollView, StyleSheet, View} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Testimonio from './src/componentes/Testimonio.jsx'
import React from 'react';

export default function App() {
  return (
    <View style={styles.app}>
      <ScrollView>
        <View style={styles.container}>
          <StatusBar style="auto" />
          <Testimonio
            nombre='Sarah Chima'
            pais='Nigeria'
            imagen={require('./src/imagenes/testimonio-sarah.png')}
            cargo='Ingeniera de Software'
            empresa='ChatDesk'
            testimonio='FreeCodeCamp fue la puerta de entrada a mi carrera como desarrollador de software. El plan de estudios bien estructurado llevó mis conocimientos de programación de un nivel de principiante total a un nivel muy seguro. Era todo lo que necesitaba para conseguir mi primer trabajo de desarrollador en una empresa increíble.'
          />
          <Testimonio
            nombre='Emma Bostian'
            pais='Suecia'
            imagen={require('./src/imagenes/testimonio-emma.png')}
            cargo='Ingeniera de Software'
            empresa='Spotify'
            testimonio='Siempre he tenido problemas para aprender JavaScript. He tomado muchos cursos, pero el curso de freeCodeCamp fue el que se quedó. Estudiar JavaScript, así como estructuras de datos y algoritmos en freeCodeCamp me dio las habilidades y la confianza que necesitaba para conseguir el trabajo de mis sueños como ingeniero de software en Spotify.'
          ></Testimonio>
          <Testimonio
            nombre='Shawn Wang'
            pais='Singapur'
            imagen={require('./src/imagenes/testimonio-shawn.png')}
            cargo='Ingeniero de Software'
            empresa='Amazon'
            testimonio='Da miedo cambiar de carrera. Solo gané la confianza de que podía programar trabajando a través de los cientos de horas de lecciones gratuitas en freeCodeCamp. Dentro de un año tuve un trabajo de seis cifras como ingeniero de software. freeCodeCamp cambió mi vida.'
          ></Testimonio>
        </View>  
        </ScrollView>
      </View>
    
  );
}

const styles = StyleSheet.create({
  app:{
    
    marginTop: 50,
    backgroundColor: '#fff',
    alignItems:'center',
    justifyContent:'center',
    textAlign: 'center',
  },
  container:{
    
    alignItems: 'center',
    justifyContent: 'center',
  },
});




