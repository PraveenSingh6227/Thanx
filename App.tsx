import React,{useEffect} from 'react';
import { StyleSheet,Text,ScrollView,ImageBackground,Dimensions,View,Image} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Dashboard from './src/src/user/auth/Dashboard';
import SplashScreen from 'react-native-splash-screen'
import Login from './src/src/auth/Login';
import Register from './src/src/auth/Register';
import Forget from './src/src/auth/Forget';
import Sidemenu from './src/src/common/Sidemenu';



const Stack = createNativeStackNavigator();
function App(){

useEffect(() => {
  SplashScreen.hide();
})
  return(
<NavigationContainer>
  <Stack.Navigator screenOptions={{headerShown: false}}>
  <Stack.Screen name='Login' component={Login} />
  <Stack.Screen name='Register' component={Register} />
  <Stack.Screen name='Forget' component={Forget} />
  <Stack.Screen name='Dashboard' component={Dashboard} />
  <Stack.Screen name='Sidemenu' component={Sidemenu} />
  </Stack.Navigator>
</NavigationContainer>
  )
}

export default App;