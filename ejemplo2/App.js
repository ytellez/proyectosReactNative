import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import Testimonio from './componentes/Testimonio';


export default function App() {
  return (
    <View style={styles.contenedorPrincipal}>
      <Text style={styles.texto}>Testimonios FreeCodeCamp</Text>
      <ScrollView style={{width:'100%'}}>
      <View style={styles.contenedortestimonio}>
        <Image style={styles.imagen} source={require('./imagenes/testimonio-emma.png')}/>
        <View style={styles.testimonio}>
          <Testimonio 
            nombre='Emma'
            pais='Suecia'
            cargo='Ingeniera de Software'
            empresa='Spotify'
            testimonio='Siempre he tenido problemas para aprender JavaScript. He tomado muchos cursos, pero el curso de freeCodeCamp fue el que se quedó.'>
          </Testimonio>
        </View>
      </View>
      <View style={styles.contenedortestimonio}>
        <Image style={styles.imagen} source={require('./imagenes/testimonio-sarah.png')}/>
        <View style={styles.testimonio}>
          <Testimonio 
            nombre='Sarah Chima'
            pais='Nigeria'
            cargo='Ingeniera de Software'
            empresa='ChatDesk'
            testimonio='FreeCodeCamp fue la puerta de entrada a mi carrera como desarrollador de software.'
          >
          </Testimonio>
        </View>
      </View>
      <View style={styles.contenedortestimonio}>
        <Image style={styles.imagen} source={require('./imagenes/testimonio-shawn.png')}/>
        <View style={styles.testimonio}>
          <Testimonio 
             nombre='Shawn Wang'
             pais='Singapur'
             cargo='Ingeniero de Software'
             empresa='Amazon'
             testimonio='Da miedo cambiar de carrera. Solo gané la confianza de que podía programar trabajando a través de los cientos de horas de lecciones gratuitas en freeCodeCamp.' 
          >
          </Testimonio>   
        </View>
      </View>
      <View style={styles.contenedortestimonio}>
        <Image style={styles.imagen} source={require('./imagenes/testimonio-emma.png')}/>
        <View style={styles.testimonio}>
          <Testimonio 
            nombre='Emma'
            pais='Suecia'
            cargo='Ingeniera de Software'
            empresa='Spotify'
            testimonio='Siempre he tenido problemas para aprender JavaScript. He tomado muchos cursos, pero el curso de freeCodeCamp fue el que se quedó.'>
          </Testimonio>
        </View>
      </View>
      <View style={styles.contenedortestimonio}>
        <Image style={styles.imagen} source={require('./imagenes/testimonio-sarah.png')}/>
        <View style={styles.testimonio}>
          <Testimonio 
            nombre='Sarah Chima'
            pais='Nigeria'
            cargo='Ingeniera de Software'
            empresa='ChatDesk'
            testimonio='FreeCodeCamp fue la puerta de entrada a mi carrera como desarrollador de software.'
          >
          </Testimonio>
        </View>
      </View>
      <View style={styles.contenedortestimonio}>
        <Image style={styles.imagen} source={require('./imagenes/testimonio-shawn.png')}/>
        <View style={styles.testimonio}>
          <Testimonio 
             nombre='Shawn Wang'
             pais='Singapur'
             cargo='Ingeniero de Software'
             empresa='Amazon'
             testimonio='Da miedo cambiar de carrera. Solo gané la confianza de que podía programar trabajando a través de los cientos de horas de lecciones gratuitas en freeCodeCamp.' 
          >
          </Testimonio>   
        </View>
      </View>
      </ScrollView>
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  contenedorPrincipal: {
    flex: 1,
    backgroundColor: '#E2E5E3',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop:36,
    
  },
  texto:{
    textAlign:'center',
    fontSize:30,
    color:'#150C6D',
    fontWeight: 'bold',
  },
  imagen:{
    width:'100%',
    height:'auto',   
    flex:2,
  },
  testimonio:{
    flex:3,
  },
  contenedortestimonio:{
    marginTop: 15,
    width:'100%',
    flexDirection: 'row',
    minHeight:200,
    backgroundColor:'#fff',
   
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  }
});
