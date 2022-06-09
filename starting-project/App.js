import 'react-native-gesture-handler';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, LogBox } from 'react-native';
import { useContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AuthContextProvider, { AuthContext } from './store/auth-context';
import { Provider } from 'react-redux';
import store from './store/redux-store';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBookData } from './store/redux-store/book/book-actions';

import AppLoading from 'expo-app-loading';

import {
   NavigationContainer,
   useNavigation,
   CommonActions,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { Colors } from './constants/styles';
import { useFonts } from 'expo-font';

// Authenticating Stack
import SignIn from './screens/Login/SignIn/SignIn';
import SignUp from './screens/Login/SignUp/SignUp';
import SignUpAuth from './screens/Login/SignUp/SignUpAuth';
import PasswordRecover from './screens/Login/PasswordRecover/PasswordRecover';
import PasswordRecoverAuth from './screens/Login/PasswordRecover/PasswordRecoverAuth';
import NewPassword from './screens/Login/PasswordRecover/NewPassword';

// Authenticated Stack
import Home from './screens/Home/Home';
import ProfileData from './screens/UserProfile/ProfileData/ProfileData';
import HistoryScreen from './screens/Payment/HistoryScreen';
import RegisterBook from './screens/UserProfile/RegisterBookScreen/RegisterBook';
import DeleteBook from './screens/UserProfile/DeleteBookScreen/DeleteBook';
import EditBook from './screens/UserProfile/EditBookScreen/EditBook';
import EditBookForm from './screens/UserProfile/EditBookScreen/EditBookForm';
import UserNotification from './screens/UserProfile/UserNotification/UserNotification';
import BookDetail from './screens/Home/BookDetail/BookDetail';
import PaymentMethodScreen from './screens/Payment/PaymentMethodScreen';
import UserDetailBook from './screens/UserProfile/UserLibrarie/UserBookDetail';
import UserBookOption from './screens/Payment/UserBookOption/UserBookOption';
import ExchangeDetail from './screens/Payment/ExchangeDetail/ExchangeDetail';
import CanceledExchange from './screens/Payment/PaymentSituation/CanceledExchange';
import SuccessfullyExchanged from './screens/Payment/PaymentSituation/SuccessfullyExchanged';

// External user screens
import ExternalProfileData from './screens/ExternalUserProfile/ExternalUserProfileData/ExternalProfileData';
import ExternalUserBookDetail from './screens/ExternalUserProfile/ExternalUserLibrarie/ExternalUserBookDetail';

import IconBtn from './componnets/UI/IconBtn';
import LogoButton from './componnets/UI/LogoButton';
import DrawerContent from './componnets/UI/DrawerContent';
import IconNotification from './componnets/UI/Notification/IconNotification';

LogBox.ignoreAllLogs(); //Ignore all log notifications
LogBox.ignoreLogs(['']);

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

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

function AuthenticatedStack() {
   const navigation = useNavigation();
   const authCtx = useContext(AuthContext);
   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(fetchBookData(authCtx.token));
      // Fetch recent books
   }, [dispatch]);

   function logoBtn() {
      function buttonLogoHandler() {
         navigation.navigate('Home');
      }
      return (
         <LogoButton
            textColor={styles.logoTxtColor}
            onPress={buttonLogoHandler}
         />
      );
   }

   function prevScreenHandler() {
      // navigation.goBack();
      navigation.dispatch(
         CommonActions.reset({
            index: 1,
            routes: [
               {
                  name: 'Home',
               },
            ],
         })
      );
   }
   function profileScreenHandler() {
      navigation.dispatch(
         CommonActions.reset({
            index: 1,
            routes: [
               { name: 'RegisterBook' },
               {
                  name: 'ProfileData',
               },
            ],
         })
      );
   }
   function externalProfileScreenHandler() {
      navigation.dispatch(
         CommonActions.reset({
            index: 1,
            routes: [
               { name: 'ExternalUserBookDetail' },
               {
                  name: 'ExternalProfileData',
               },
            ],
         })
      );
   }

   // Se o número de notificações for maior que 0 aplicará esses estilos ao botao de notificações
   const teste = { left: 10, top: 5 };

   return (
      <Drawer.Navigator
         drawerContent={(props) => <DrawerContent {...props} />}
         screenOptions={({ navigation }) => ({
            drawerPosition: 'right',
            headerStyle: { backgroundColor: Colors.primary },
            headerTintColor: 'white',
            headerTitleAlign: 'center',
            drawerActiveBackgroundColor: Colors.secondary,
            drawerActiveTintColor: Colors.snow,
            headerTitle: logoBtn,
            headerStatusBarHeight: 50,
            //    // Estiliza a parte lateral do drawer globalmente
            drawerStyle: {
               backgroundColor: Colors.quartiary,
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
                  <IconNotification
                     icon='notifications-outline'
                     color={tintColor}
                     size={24}
                     iconBtnStyle={styles.iconLeftBtn}
                     onPress={() => {
                        console.log(`Left BTN`);
                     }}
                     notificationNum={false}
                     // iconContainer={teste}
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
            name='HistoryScreen'
            component={HistoryScreen}
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
            name='RegisterBook'
            component={RegisterBook}
            options={{
               headerLeft: ({ tintColor }) => (
                  <IconBtn
                     icon='arrow-back-outline'
                     color={tintColor}
                     size={24}
                     iconBtnStyle={styles.iconLeftBtn}
                     onPress={profileScreenHandler}
                  />
               ),
               headerTitle: 'Cadastro de Livros',
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
            name='EditBook'
            component={EditBook}
            options={{
               headerLeft: ({ tintColor }) => (
                  <IconBtn
                     icon='arrow-back-outline'
                     color={tintColor}
                     size={24}
                     iconBtnStyle={styles.iconLeftBtn}
                     onPress={profileScreenHandler}
                  />
               ),
               headerTitle: 'Edite seus livros',
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
            name='EditBookForm'
            component={EditBookForm}
            options={{
               headerLeft: ({ tintColor }) => (
                  <IconBtn
                     icon='arrow-back-outline'
                     color={tintColor}
                     size={24}
                     iconBtnStyle={styles.iconLeftBtn}
                     onPress={profileScreenHandler}
                  />
               ),
               headerTitle: 'Edite seu livro',
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
            name='DeleteBook'
            component={DeleteBook}
            options={{
               headerLeft: ({ tintColor }) => (
                  <IconBtn
                     icon='arrow-back-outline'
                     color={tintColor}
                     size={24}
                     iconBtnStyle={styles.iconLeftBtn}
                     onPress={profileScreenHandler}
                  />
               ),
               headerTitle: 'Delete seus livros',
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
         <Drawer.Screen
            name='PaymentMethodScreen'
            component={PaymentMethodScreen}
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
               headerTitle: 'Método de Pagamento',
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
            name='UserDetailBook'
            component={UserDetailBook}
            options={{
               headerLeft: ({ tintColor }) => (
                  <IconBtn
                     icon='arrow-back-outline'
                     color={tintColor}
                     size={24}
                     iconBtnStyle={styles.iconLeftBtn}
                     onPress={profileScreenHandler}
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
            name='UserBookOption'
            component={UserBookOption}
            options={{
               headerLeft: ({ tintColor }) => (
                  <IconBtn
                     icon='arrow-back-outline'
                     color={tintColor}
                     size={24}
                     iconBtnStyle={styles.iconLeftBtn}
                     onPress={profileScreenHandler}
                  />
               ),
               headerTitle: 'Sua biblioteca',
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
            name='ExchangeDetail'
            component={ExchangeDetail}
            options={{
               headerLeft: ({ tintColor }) => (
                  <IconBtn
                     icon='arrow-back-outline'
                     color={tintColor}
                     size={24}
                     iconBtnStyle={styles.iconLeftBtn}
                     onPress={profileScreenHandler}
                  />
               ),
               headerTitle: 'Detalhes da Troca',
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
            name='SuccessfullyExchanged'
            component={SuccessfullyExchanged}
            options={{
               headerLeft: ({ tintColor }) => (
                  <IconBtn
                     icon='arrow-back-outline'
                     color={tintColor}
                     size={24}
                     iconBtnStyle={styles.iconLeftBtn}
                     onPress={profileScreenHandler}
                  />
               ),
               headerTitle: 'Situação do Pagamento',
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
            name='CanceledExchange'
            component={CanceledExchange}
            options={{
               headerLeft: ({ tintColor }) => (
                  <IconBtn
                     icon='arrow-back-outline'
                     color={tintColor}
                     size={24}
                     iconBtnStyle={styles.iconLeftBtn}
                     onPress={profileScreenHandler}
                  />
               ),
               headerTitle: 'Situação do Pagamento',
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
         {/* External User Screens */}
         <Drawer.Screen
            name='ExternalProfileData'
            component={ExternalProfileData}
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
            name='ExternalUserBookDetail'
            component={ExternalUserBookDetail}
            options={{
               headerLeft: ({ tintColor }) => (
                  <IconBtn
                     icon='arrow-back-outline'
                     color={tintColor}
                     size={24}
                     iconBtnStyle={styles.iconLeftBtn}
                     onPress={externalProfileScreenHandler}
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
      </Drawer.Navigator>
   );
}

function Navigation() {
   const authCtx = useContext(AuthContext);
   return (
      <NavigationContainer>
         {!authCtx.isAuthenticated ? (
            <AuthStack />
         ) : (
            <Provider store={store}>
               <AuthenticatedStack />
            </Provider>
         )}
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
