import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { useState, useEffect } from 'react';

import Logo from '../../../componnets/UI/Logo';

import { Colors } from '../../../constants/styles';
import SignUpForm from '../../../componnets/SignUp/SignUpForm';

import HorizontalButton from '../../../componnets/UI/HorizontalButton';
import GoogleBtn from '../../../componnets/UI/GoogleBtn';

const SignUp = ({ navigation }) => {
   function signInHandler() {
      navigation.replace('SignIn');
   }

   const [isValidated, setIsValidated] = useState(false);
   const [userDataValidation, setUserDataValidation] = useState({});
   const [userData, setUserData] = useState({});
   const [credentialsInvalid, setCredentialsInvalid] = useState({
      firstName: false,
      lastName: false,
      email: false,
      password: false,
      confirmPassword: false,
      rg: false,
      cpf: false,
      cellphone: false,
      telephone: false,
   });

   function submitHandler(userDataValidation) {
      setUserDataValidation((curUserData) => {
         return {
            ...curUserData,
            ...userDataValidation,
         };
      });
      userDataValidationHandler(userDataValidation);
   }

   function userDataValidationHandler(userDataValidation) {
      let {
         firstName,
         lastName,
         email,
         password,
         confirmPassword,
         rg,
         cpf,
         cellphone,
      } = userDataValidation;

      firstName = firstName.trim();
      lastName = lastName.trim();
      email = email.trim();
      rg = rg.trim();
      cpf = cpf.trim();
      cellphone = cellphone.trim();

      const firstNameIsValid = firstName.length > 0;
      const lastNameIsValid = lastName.length > 0;
      const emailIsValid = email.includes('@');
      const passwordIsValid = password.length > 0;
      const passwordsAreEqual = password === confirmPassword;
      const rgIsValid = rg.length > 0;
      // const rgIsValid = rg.length > 8;
      const cpfIsValid = cpf.length > 0;
      // const cpfIsValid = cpf.length > 10;
      const cellphoneIsValid = cellphone.length > 0;

      if (
         !firstNameIsValid ||
         !lastNameIsValid ||
         !emailIsValid ||
         !passwordIsValid ||
         !passwordsAreEqual ||
         !rgIsValid ||
         !cpfIsValid ||
         !cellphoneIsValid
      ) {
         setCredentialsInvalid({
            firstName: !firstNameIsValid,
            lastName: !lastNameIsValid,
            email: !emailIsValid,
            password: !passwordIsValid,
            confirmPassword: !passwordIsValid || passwordsAreEqual,
            rg: !rgIsValid,
            cpf: !cpfIsValid,
            cellphone: !cellphoneIsValid,
         });
      } else {
         setUserData({
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
            rg: rg,
            cpf: cpf,
            cellphone: cellphone,
         });
         setIsValidated(true);
      }
   }

   useEffect(() => {
      if (isValidated) {
         navigation.navigate('SignUpAuth', { email: userData.email });
      }
   }, [isValidated]);

   return (
      <>
         <View style={styles.container}>
            <Logo />
         </View>
         <ScrollView>
            <View style={styles.formWrapper}>
               <Text style={styles.title}>Sua Conta</Text>
            </View>
            <SignUpForm
               onSubmit={submitHandler}
               credentialsInvalid={credentialsInvalid}
               isValidated={isValidated}
            />
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
