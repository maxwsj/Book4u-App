import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';

import Logo from '../../../componnets/UI/Logo';

import { Colors } from '../../../constants/styles';
import SignUpForm from '../../../componnets/SignUp/SignUpForm';

import HorizontalButton from '../../../componnets/UI/HorizontalButton';
import GoogleBtn from '../../../componnets/UI/GoogleBtn';

const SignUp = () => {
   const [userData, setUserData] = useState({});

   function submitHandler(credentials) {
      setUserData((curUserData) => {
         return {
            ...curUserData,
            ...credentials,
         };
      });
   }

   return (
      <View style={styles.container}>
         <Logo />
         <View style={styles.formWrapper}>
            <Text style={styles.title}>Sua Conta</Text>
            <SignUpForm onSubmit={submitHandler} />
         </View>
         <HorizontalButton
            hrContainer={styles.hrContainer}
            hrColor={styles.hrColor}
            btnTitle='Possui uma conta ?'
            btnText='Clique aqui !'
         />
         <View style={styles.googleBtnContainer}>
            <GoogleBtn />
         </View>
      </View>
   );
};

export default SignUp;

const styles = StyleSheet.create({
   container: {
      marginTop: 80,
   },
   formWrapper: {
      marginTop: 40,
      marginHorizontal: 30,
   },

   hrColor: {
      borderBottomColor: Colors.lavenderBlush,
   },
   hrContainer: {
      marginTop: 50,
   },
   googleBtnContainer: {
      marginTop: 20,
   },
   title: {
      color: Colors.silver400,
      fontSize: 20,
   },
});
