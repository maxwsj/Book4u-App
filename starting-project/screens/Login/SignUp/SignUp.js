import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

import Logo from '../../../componnets/UI/Logo';

import { Colors } from '../../../constants/styles';
import SignUpForm from '../../../componnets/SignUp/SignUpForm';

import Button from '../../../componnets/UI/Button';
import HorizontalButton from '../../../componnets/UI/HorizontalButton';
import GoogleBtn from '../../../componnets/UI/GoogleBtn';

const SignUp = () => {
   return (
      <View style={styles.container}>
         <Logo />
         <View style={styles.formWrapper}>
            <Text style={styles.title}>Sua Conta</Text>
            <SignUpForm />
         </View>
         <View style={styles.buttonWrapper}>
            <View style={styles.button}>
               <Button>Próximo</Button>
            </View>
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
   buttonWrapper: {
      marginHorizontal: 30,
   },
   button: {
      marginTop: 50,
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
