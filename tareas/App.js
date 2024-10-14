import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import uuid from 'react-native-uuid';
import Tareas from './componentes/Tareas';


import {  ScrollView, StyleSheet, Text, TextInput, TouchableHighlight, View } from 'react-native';

export default function App() {

  const[tarea, setTarea] = useState('');
  const[tareas, setTareas] = useState([]);

  const guardarArreglo = () => {
    if (!tarea) return null;
    const tareaNueva = {
      id: uuid.v4(),
      nuevaTarea: tarea,
      completada: true,
    }
      setTareas([tareaNueva, ...tareas]);
      setTarea('');
  };
  const eliminarTarea = id => {
    const tareasActualizadas= tareas.filter(tarea => tarea.id !== id);
    setTareas(tareasActualizadas); //se pueden ubicar en una misma línea
  };
  const completarTarea = id => {
    const tareasActualizadas= tareas.map(tarea=>{
      if(tarea.id === id) {
        tarea.completada =! tarea.completada;
      }
      return tarea;
    });
    setTareas(tareasActualizadas)
  };
  return (
    <View style={styles.container}>
        <Text style={styles.titulo}>Aplicación de Tareas</Text>
        <View style={styles.contenedorFormulario}>
          <TextInput 
            style={styles.textotarea} 
            placeholder='Ingresa una tarea' 
            onChangeText={setTarea}
            value={tarea}
          ></TextInput>
          <TouchableHighlight onPress={guardarArreglo} style={styles.boton}>
            <Text style={styles.textoBoton}>Add Tarea</Text>
          </TouchableHighlight>
      </View>
      <ScrollView style={styles.scrollLista}>
        <View style={styles.lista}>
          {tareas.map((i) => {
              return(
                <Tareas
                  key={i.id}
                  id={i.id}
                  tarea={i.nuevaTarea}
                  completada={i.completada}
                  eliminar={eliminarTarea}
                  completarTarea={completarTarea}>
                </Tareas>
              )
            })}
        </View>
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent:'center',
    alignItems:'center',
  },
  titulo:{
    fontSize: 30,
    fontWeight:'bold',
    color:'#A71B78',
    marginTop:50,
  },
    contenedorFormulario:{
    flexDirection:'row',
    margin:10,
  },
  textotarea:{
    flex:4,
    width:'100%',
    height: 60,
    borderColor:'#A71B78',
    borderWidth:2,
    padding:10,
    marginStart:5,
    fontSize:18,
  },
  boton:{
    flex:2,
    marginEnd:5,
    alignItems:'center',
    justifyContent:'center',
    width:'100%',
    height: 60,
    borderColor:'#A71B78',
    borderWidth:2,
    backgroundColor: '#A71B78', 
  },
  textoBoton:{
    color:'#fff',
    fontSize: 16,
    fontWeight:'bold',
  },
  scrollLista:{
    width:'100%',
  },
  lista:{
    width:'93%',
    marginHorizontal:15,
    height: '100%',
  },
});
