import { View, Text, StyleSheet } from 'react-native';
import React from 'react'

export default function SettingsScreen() {
  return (
    <View style={styles.container}>
      <Text style={{fontSize:30}}>SettingsScreen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
      
    },
});