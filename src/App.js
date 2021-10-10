
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './pages/login/Login';
import Sign from './pages/sign/Sign';
import Message from './pages/message/Message';
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
        {/* <Stack.Screen name="Message" component={Message} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
