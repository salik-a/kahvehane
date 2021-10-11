
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './pages/login/Login';
import Sign from './pages/sign/Sign';
import Message from './pages/message/Message';
import FlashMessage from "react-native-flash-message";
import auth from "@react-native-firebase/auth"
import colors from './assets/styles/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const Stack = createStackNavigator();



const App = () => {
  const [userSession, setUserSession] = React.useState();

  React.useEffect(() => {
    auth().onAuthStateChanged(user => { setUserSession(!!user) })
  }, [])
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
      <Stack.Navigator>
        {!userSession ? (
          <Stack.Screen
            name="AuthStack"
            component={AuthStack}
            options={{ headerShown: false }}
          />
        ) : (
          <Stack.Screen
            name="Message"
            component={Message}
            options={{
              title: "Kahvehane",
              headerTintColor: colors.buttonblue,
              headerRight: () => (
                <Icon
                  name={"logout"}
                  size={30}
                  color={colors.buttonblue}
                  onPress={() => auth().signOut()}
                />)
            }}
          />
        )}
      </Stack.Navigator>
      <FlashMessage position="top" />
    </NavigationContainer>
  );
};

export default App;
