import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import SignIn from './screens/Login/SignIn/SignIn';
import SignUp from './screens/Login/SignUp/SignUp';
import SignUpAuth from './screens/Login/SignUp/SignUpAuth';

export default function App() {
   return (
      <>
         <StatusBar style='auto' />
         <SignIn />
         {/* <SignUp /> */}
         {/* <SignUpAuth /> */}
      </>
   );
}

const styles = StyleSheet.create({});
