import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './Tabs/HomeScreen';
import SettingsScreen from './Tabs/SettingsScreen';
import Ionicons from '@expo/vector-icons/Ionicons';
import Stack from './Tabs/Stack';
import Stack2 from './Tabs/Stack2';

const Tab= createBottomTabNavigator();
const HomeStackNavigator=createNativeStackNavigator();

function MyStack(){
  return(
    <HomeStackNavigator.Navigator
      initialRouteName='HomeScreen'
    >
      <HomeStackNavigator.Screen
        name="HomeScreen"
        component={HomeScreen}
      />
       <HomeStackNavigator.Screen
        name="Stack1"
        component={Stack}
      />
      <HomeStackNavigator.Screen
        name="Stack2"
        component={Stack2}
      />
    </HomeStackNavigator.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          tabBarActiveTintColor:'purple',
          tabBarInactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen 
          name="Home" 
          component={MyStack}
          options={{
            tabBarLabel:'Home',
            tabBarIcon:({color, size})=>(
              <Ionicons name="home" size={24} color={color} />
            ),
           // tabBarBadge:10,
            headerShown:false,
          }} 
          />
        <Tab.Screen 
          name="Settings" 
          component={SettingsScreen} 
          options={{
            tabBarLabel:'Settings',
            tabBarIcon:({color, size})=>(
              <Ionicons name="settings" size={24} color={color} />
            ),
            //tabBarBadge:0,
            //headerShown:false,
          }} />
          <Tab.Screen 
          name="Otro" 
          component={SettingsScreen} 
          options={{
            tabBarLabel:'Otro',
            tabBarIcon:({color, size})=>(
              <Ionicons name="add-circle" size={24} color={color} />
            ),
            //tabBarBadge:0,
            //headerShown:false,
          }} />
      </Tab.Navigator>
  </NavigationContainer>
  );
}


