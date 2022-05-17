import 'react-native-gesture-handler';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, LogBox } from 'react-native';
import { useContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import AppLoading from 'expo-app-loading';

import {
   NavigationContainer,
   useNavigation,
   CommonActions,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { Colors } from './constants/styles';

import SignIn from './screens/Login/SignIn/SignIn';
import SignUp from './screens/Login/SignUp/SignUp';
import SignUpAuth from './screens/Login/SignUp/SignUpAuth';
import PasswordRecover from './screens/Login/PasswordRecover/PasswordRecover';
import PasswordRecoverAuth from './screens/Login/PasswordRecover/PasswordRecoverAuth';
import NewPassword from './screens/Login/PasswordRecover/NewPassword';

// Authenticated Stack
import Home from './screens/Home/Home';
import ProfileData from './screens/UserProfile/ProfileData/ProfileData';
import ShoppingCartScreen from './screens/Payment/ShoppingCartScreen';
import UserLibrarie from './screens/UserProfile/UserLibrarie/UserLibrarie';
import UserNotification from './screens/UserProfile/UserNotification/UserNotification';
import BookDetail from './screens/Home/BookDetail/BookDetail';

import { useFonts } from 'expo-font';

import IconBtn from './componnets/UI/IconBtn';
import LogoButton from './componnets/UI/LogoButton';
import DrawerContent from './componnets/UI/DrawerContent';

import AuthContextProvider, { AuthContext } from './store/auth-context';

LogBox.ignoreAllLogs(); //Ignore all log notifications
LogBox.ignoreLogs(['']);

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function AuthStack() {
   function testeHandler(isInvalid) {
      console.log(isInvalid);
   }
   return (
      <Stack.Navigator
         screenOptions={{
            contentStyle: { backgroundColor: Colors.white },
            headerShown: false,
         }}
      >
         <Stack.Screen
            name='SignIn'
            component={SignIn}
            onTeste={testeHandler}
         />
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

function AuthenticatedStack() {
   const navigation = useNavigation();
   function logoBtn() {
      function buttonLogoHandler() {
         navigation.navigate('Home');
      }
      return <LogoButton onPress={buttonLogoHandler} />;
   }

   function prevScreenHandler() {
      navigation.dispatch(CommonActions.goBack());
   }

   return (
      <Drawer.Navigator
         drawerContent={(props) => <DrawerContent {...props} />}
         screenOptions={({ navigation }) => ({
            drawerPosition: 'right',
            headerStyle: { backgroundColor: Colors.darkCyan },
            headerTintColor: 'white',
            headerTitleAlign: 'center',
            drawerActiveBackgroundColor: Colors.secondary,
            drawerActiveTintColor: Colors.snow,
            headerTitle: logoBtn,
            headerStatusBarHeight: 50,
            //    // Estiliza a parte lateral do drawer globalmente
            drawerStyle: {
               backgroundColor: Colors.mediumCyan,
               width: '60%',
            },
            sceneContainerStyle: { backgroundColor: Colors.snow },
            //    // Estiliza a parte lateral do Drawer individualmente
            // drawerContentContainerStyle: { backgroundColor: 'white' },
            // drawerContentStyle: { backgroundColor: '#f31' },
            headerRight: ({ tintColor }) => (
               <IconBtn
                  icon='menu'
                  color={tintColor}
                  size={24}
                  onPress={() => navigation.toggleDrawer()}
                  iconBtnStyle={styles.iconRightBtn}
               />
            ),
            //    headerRightContainerStyle: { paddingRight: 16 },
            //    headerTitleContainerStyle: { paddingLeft: 16 },
         })}
      >
         <Drawer.Screen
            name='Home'
            component={Home}
            options={{
               headerLeft: ({ tintColor }) => (
                  <IconBtn
                     icon='ellipsis-horizontal'
                     color={tintColor}
                     size={24}
                     iconBtnStyle={styles.iconLeftBtn}
                     onPress={() => {
                        console.log(`Left BTN`);
                     }}
                  />
               ),
            }}
         />
         <Drawer.Screen
            name='BookDetail'
            component={BookDetail}
            options={{
               headerLeft: ({ tintColor }) => (
                  <IconBtn
                     icon='arrow-back-outline'
                     color={tintColor}
                     size={24}
                     iconBtnStyle={styles.iconLeftBtn}
                     onPress={prevScreenHandler}
                  />
               ),
               headerTitle: 'Detalhes do Livro',
               headerStyle: { backgroundColor: Colors.white50 },
               headerTintColor: Colors.secondary,
               headerTitleStyle: {
                  color: Colors.silver400,
                  fontFamily: 'poppins-regular',
                  fontSize: 18,
                  marginTop: 4,
               },
            }}
         />
         <Drawer.Screen
            name='ShoppingCartScreen'
            component={ShoppingCartScreen}
            options={{
               headerLeft: ({ tintColor }) => (
                  <IconBtn
                     icon='arrow-back-outline'
                     color={tintColor}
                     size={24}
                     iconBtnStyle={styles.iconLeftBtn}
                     onPress={prevScreenHandler}
                  />
               ),
            }}
         />
         <Drawer.Screen
            name='UserLibrarie'
            component={UserLibrarie}
            options={{
               headerLeft: ({ tintColor }) => (
                  <IconBtn
                     icon='arrow-back-outline'
                     color={tintColor}
                     size={24}
                     iconBtnStyle={styles.iconLeftBtn}
                     onPress={prevScreenHandler}
                  />
               ),
            }}
         />
         <Drawer.Screen
            name='UserNotification'
            component={UserNotification}
            options={{
               headerLeft: ({ tintColor }) => (
                  <IconBtn
                     icon='arrow-back-outline'
                     color={tintColor}
                     size={24}
                     iconBtnStyle={styles.iconLeftBtn}
                     onPress={prevScreenHandler}
                  />
               ),
            }}
         />
         <Drawer.Screen
            name='ProfileData'
            component={ProfileData}
            options={{
               headerLeft: ({ tintColor }) => (
                  <IconBtn
                     icon='arrow-back-outline'
                     color={tintColor}
                     size={24}
                     iconBtnStyle={styles.iconLeftBtn}
                     onPress={prevScreenHandler}
                  />
               ),
            }}
         />
      </Drawer.Navigator>
   );
}

function Navigation() {
   const authCtx = useContext(AuthContext);
   return (
      <NavigationContainer>
         {!authCtx.isAuthenticated ? <AuthStack /> : <AuthenticatedStack />}
      </NavigationContainer>
   );
}

function Root() {
   const [isTryingLogin, setIsTryingLogin] = useState(true);
   const authCtx = useContext(AuthContext);
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

   useEffect(() => {
      async function fetchToken() {
         const storedToken = await AsyncStorage.getItem('token');

         if (storedToken) {
            authCtx.authenticate(storedToken);
         }

         setIsTryingLogin(false);
      }

      fetchToken();
   }, []);

   if (isTryingLogin) {
      return <AppLoading />;
   }

   if (!fontsLoaded) {
      return <AppLoading />;
   }

   return <Navigation />;
}

export default function App() {
   return (
      <>
         <StatusBar style='auto' />
         <AuthContextProvider>
            <Root />
         </AuthContextProvider>
      </>
   );
}

const styles = StyleSheet.create({
   iconLeftBtn: {
      marginLeft: 25,
   },
   iconRightBtn: {
      marginRight: 12,
   },
});
