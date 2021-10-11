
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './pages/login/Login';
import Sign from './pages/sign/Sign';
import Message from './pages/message/Message';
import FlashMessage from "react-native-flash-message";

const Stack = createStackNavigator();



const App = () => {
  const AuthStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Sign" component={Sign} />
        </Stack.Navigator>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name= "AuthStack" component= {AuthStack} />
        <Stack.Screen name="Message" component={Message} />
      </Stack.Navigator>
      <FlashMessage position="top" />
    </NavigationContainer>
  );
};

export default App;
