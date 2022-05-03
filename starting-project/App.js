import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import AppLoading from 'expo-app-loading';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Colors } from './constants/styles';

import SignIn from './screens/Login/SignIn/SignIn';
import SignUp from './screens/Login/SignUp/SignUp';
import SignUpAuth from './screens/Login/SignUp/SignUpAuth';
import PasswordRecover from './screens/Login/PasswordRecover/PasswordRecover';
import PasswordRecoverAuth from './screens/Login/PasswordRecover/PasswordRecoverAuth';
import NewPassword from './screens/Login/PasswordRecover/NewPassword';

import { useFonts } from 'expo-font';

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

// function AuthenticatedStack() {
//    const authCtx = useContext(AuthContext);
//    return (
//       <Stack.Navigator
//          screenOptions={{
//             headerStyle: { backgroundColor: Colors.primary500 },
//             headerTintColor: 'white',
//             contentStyle: { backgroundColor: Colors.primary100 },
//          }}
//       >
//          <Stack.Screen
//             name='Welcome'
//             component={WelcomeScreen}
//             options={{
//                headerRight: ({ tintColor }) => (
//                   <IconButton
//                      icon='exit'
//                      color={tintColor}
//                      size={24}
//                      onPress={authCtx.logout}
//                   />
//                ),
//             }}
//          />
//       </Stack.Navigator>
//    );
// }

// function Navigation() {
//    const authCtx = useContext(AuthContext);
//    return (
//       <NavigationContainer>
//          {!authCtx.isAuthenticated && <AuthStack />}
//          {authCtx.isAuthenticated && <AuthenticatedStack />}
//       </NavigationContainer>
//    );
// }

export default function App() {
   const [fontsLoaded] = useFonts({
      'poppins-regular': require('./assets/fonts/poppins/Poppins_400Regular.ttf'),
      'poppins-medium': require('./assets/fonts/poppins/Poppins_500Medium.ttf'),
      'poppins-bold': require('./assets/fonts/poppins/Poppins_700Bold.ttf'),

      'lato-light': require('./assets/fonts/lato/Lato_300Light.ttf'),
      'lato-regular': require('./assets/fonts/lato/Lato_400Regular.ttf'),
      'lato-bold': require('./assets/fonts/lato/Lato_700Bold.ttf'),

      'montserrat-light': require('./assets/fonts/montserrat/Montserrat_300Light.ttf'),
      'montserrat-regular': require('./assets/fonts/montserrat/Montserrat_400Regular.ttf'),
      'montserrat-medium': require('./assets/fonts/montserrat/Montserrat_500Medium.ttf'),
   });

   if (!fontsLoaded) {
      return <AppLoading />;
   }

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
