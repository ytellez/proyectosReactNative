import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import React, {useState, useEffect} from 'react';

export default function App() {
  const [user, setUsers] = useState([])
  // const [loading, setLoading] = useState(true)

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        setUsers(data)
        setLoading(false)
      })
  },[])


  // if (loading){
  //   return <View style={styles.center}><Text>Cargando...</Text></View>
  // }

  return (
    <View style={styles.container}>
      <FlatList
        data={user}
        renderItem={({item}) => 
          <View style={styles.item}>
            <Text style={styles.name}> {item.name}</Text>
            <Text> {item.username}</Text>
            <Text> {item.email}</Text>
            <Text> {item.phone}</Text>

           
          </View>}>
          {/* keyExtractor={item => String(item.id)} */}
          keyExtractor={item => String(item.id)}
        
    
      /</FlatList>
{/* 
      <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  center:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
  },
  item:{
    padding: 10,
    fontSize:15,
    height:110,
    borderBottomColor:'#ccc',
    borderBottomWidth:1,
  },
  name:{
    color:'blue',
    fontWeight:'bold',
    fontSize: 20,
  }
});
