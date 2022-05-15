import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { useState, useEffect } from 'react';

import Logo from '../../../componnets/UI/Logo';

import { Colors } from '../../../constants/styles';

import usuarioService from '../../../util/auth';

import SignUpContent from '../../../componnets/SignUp/SignUpContent';

import HorizontalButton from '../../../componnets/UI/HorizontalButton';
import GoogleBtn from '../../../componnets/UI/GoogleBtn';

const SignUp = ({ navigation }) => {
   const [isInvalid, setIsInvalid] = useState(false);

   function signInHandler() {
      navigation.replace('SignIn');
   }

   async function signupHandler(userData) {
      // setIsAuthenticating(true);
      try {
         const registerNumber = await usuarioService.createUser(userData);

         navigation.navigate('SignUpAuth', {
            email: userData.personalData.email,
            registerNumber: registerNumber,
         });

         // authCtx.authenticate(token);
      } catch (error) {
         setIsInvalid(true);
         // setIsAuthenticating(false);
      }
   }

   return (
      <>
         <View style={styles.container}>
            <Logo />
         </View>
         <ScrollView>
            <View style={styles.formWrapper}>
               <Text style={styles.title}>Sua Conta</Text>
            </View>
            <SignUpContent onSubmitUser={signupHandler} isInvalid={isInvalid} />
            <HorizontalButton
               hrContainer={styles.hrContainer}
               hrColor={styles.hrColor}
               btnTitle='Possui uma conta ?'
               btnText='Clique aqui !'
               onPress={signInHandler}
            />
            <View style={styles.googleBtnContainer}>
               <GoogleBtn />
            </View>
         </ScrollView>
      </>
   );
};

export default SignUp;

const styles = StyleSheet.create({
   container: {
      marginTop: 80,
   },
   formWrapper: {
      marginTop: 25,
      marginHorizontal: 30,
   },

   hrColor: {
      borderBottomColor: Colors.tertiary,
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
      fontFamily: 'montserrat-regular',
   },
});
