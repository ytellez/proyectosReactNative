App.js

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.pink} />
      <View style={styles.blue}/>
      <View style={styles.yellow} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
  },

  pink: {
    width:100,
    height:100,
    backgroundColor: "#ea638c",
  },

  blue: {
    width:100,
    height:100,
    backgroundColor: "#47ebff",
    flexDirection:'row-reverse',

  },

  yellow: {
    width:100,
    height:100,
    backgroundColor: "#ffd670",
  },

})
