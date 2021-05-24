import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignUp from './components/05_Pages/SignUp/SignUp';
import Login from './components/05_Pages/Login/Login';
const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="SignUp" options={{ title: null }} component={SignUp} />
        <Stack.Screen name="Login" options={{ title: null }} component={Login} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;