// import { useState } from "react";
// import { View } from "react-native";
// import { Button, Input, Text } from "react-native-elements";
// import  Icon  from 'react-native-vector-icons/FontAwesome';
// import styles from "./style/MainStyle";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from "./screens/Login";
import Home from './screens/Home';
import Register from './screens/Register';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login}   options={{
          headerShown: false,
        }} />
      <Stack.Screen name="Register" component={Register} options={{ headerLeft: () => null }} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}


export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}

