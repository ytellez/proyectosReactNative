import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ScrollView, Text, View, Image } from 'react-native';
import Testimonios from './COMPONENTES/Testimonios';

export default function App() {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('./IMAGENES/logo.png')}/>
      <Text style={styles.titulo}>Esto es lo que dicen nuestros alumnos sobre FreeCodeCamp:</Text>
     
      <ScrollView style={styles.scrollContainer}>
        <Testimonios
          nombre='Shawn Wang'
          pais='Singapur'
          foto={require('./IMAGENES/Shawn.png')}
          cargo='Ingeniero de Software'
          empresa='Amazon'
          testimonio='"Da miedo cambiar de carrera. Solo gané la confianza de que podía programar trabajando a través de los cientos de horas de lecciones gratuitas en freeCodeCamp. Dentro de un año tuve un trabajo de seis cifras como ingeniero de software."'    />
        <Testimonios
          nombre='Sarah Chima'
          pais='Nigeria'
          foto={require('./IMAGENES/Sarah.png')}
          cargo='Ingeniera de Software'
          empresa='ChatDesk'
          testimonio='"FreeCodeCamp fue la puerta de entrada a mi carrera como desarrollador de software. 
          El plan de estudios bien estructurado llevó mis conocimientos de programación 
          de un nivel de principiante total a un nivel muy seguro."'
        />
        <Testimonios
          nombre='Emma Bostian'
          pais='Suecia'
          foto={require('./IMAGENES/Emma.png')}
          cargo='Ingeniera de Software'
          empresa='Spotify'
          testimonio='"Siempre he tenido problemas para aprender JavaScript. 
          He tomado muchos cursos, pero el curso de freeCodeCamp fue el que se quedó. 
          Estudiar JavaScript, así como estructuras de datos y algoritmos en freeCodeCamp 
          me dio las habilidades y la confianza que necesitaba para conseguir el trabajo 
          de mis sueños como ingeniero de software en Spotify."'
        />
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F6F7',
    alignItems: 'center',
    justifyContent: 'center',

  },
  titulo:{
    margin:10,
    fontSize:20,
    fontWeight:'bold',
    textAlign:'center'
  },
  logo:{
    height:80,
    width:'100%',
  },
  scrollContainer: {
    width:'100%'
  },
});
