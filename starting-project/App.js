import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Colors } from './constants/styles';

import SignIn from './screens/Login/SignIn/SignIn';
import SignUp from './screens/Login/SignUp/SignUp';
import SignUpAuth from './screens/Login/SignUp/SignUpAuth';
import PasswordRecover from './screens/Login/PasswordRecover/PasswordRecover';
import PasswordRecoverAuth from './screens/Login/PasswordRecover/PasswordRecoverAuth';
import NewPassword from './screens/Login/PasswordRecover/NewPassword';

const Stack = createNativeStackNavigator();

function AuthStack() {
   return (
      <Stack.Navigator
         screenOptions={{
            contentStyle: { backgroundColor: Colors.white },
            headerShown: false,
         }}
      >
         <Stack.Screen name='SignIn' component={SignIn} />
         <Stack.Screen name='SignUp' component={SignUp} />
         <Stack.Screen name='SignUpAuth' component={SignUpAuth} />
         <Stack.Screen name='PasswordRecover' component={PasswordRecover} />
         <Stack.Screen
            name='PasswordRecoverAuth'
            component={PasswordRecoverAuth}
         />
         <Stack.Screen name='NewPassword' component={NewPassword} />
      </Stack.Navigator>
   );
}

export default function App() {
   return (
      <>
         <StatusBar style='auto' />
         <NavigationContainer>
            <AuthStack />
         </NavigationContainer>
      </>
   );
}

const styles = StyleSheet.create({});
