import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import SignIn from './screens/Login/SignIn/SignIn';
import SignUp from './screens/Login/SignUp/SignUp';

export default function App() {
   return (
      <>
         <StatusBar style='auto' />
         {/* <SignIn /> */}
         <SignUp />
      </>
   );
}

const styles = StyleSheet.create({});
