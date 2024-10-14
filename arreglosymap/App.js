import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View} from 'react-native';

export default function App() {

  const persona = [
    {
      nombre: "Yesenia",
      apellidos:
        {
         app1: "Téllez",
         app2: "Gómez"
        } 
    },
    {
      nombre: "Dylan",
      apellidos:
        {
         app1: "Ocón",
        }
      
    }
  ]

  return (
    <View style={styles.container}>
      {/* { persona.map((p)=>{
          return(
            <Text>{p}</Text>
          );
        }  
      )} */}
      <FlatList
        data={persona}
        renderItem={({item}) => 
          <View style={styles.elemento}>
             <Text>{item.apellidos.app1}</Text>
             <Text>{item.apellidos.app2}</Text>
          </View>
        }
        keyExtractor={item => item.id}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop:36,
  },
  elemento:{
    borderColor: '000',
    borderWidth:2,
    width: 120,
  }
});
