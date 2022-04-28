import { View, StyleSheet } from 'react-native';
import { useState } from 'react';

import { Colors } from '../../../constants/styles';

import FlatButton from '../../../componnets/UI/FlatButton';
import HorizontalButton from '../../../componnets/UI/HorizontalButton';
import GoogleBtn from '../../../componnets/UI/GoogleBtn';

import SignInForm from '../../../componnets/SignIn/SignInForm';
import SignInBgImage from '../../../componnets/SignIn/SignInBgImage';

const SignIn = ({ navigation }) => {
   function signUpHandler() {
      navigation.replace('SignUp');
   }

   const [credentialsInvalid, setCredentialsInvalid] = useState({
      name: false,
      nickname: false,
      email: false,
      password: false,
      confirmPassword: false,
   });

   function submitHandler(credentials) {
      let { email, password } = credentials;

      email = email.trim();
      password = password.trim();

      const emailIsValid = email.includes('@');
      const passwordIsValid = password.length > 6;

      if (!emailIsValid || !passwordIsValid) {
         setCredentialsInvalid({
            email: !emailIsValid,
            password: !passwordIsValid,
         });
         return;
      }
   }

   return (
      <View>
         <View style={styles.bgImgContainer}>
            <SignInBgImage />
         </View>
         <SignInForm
            onSubmit={submitHandler}
            credentialsInvalid={credentialsInvalid}
         />

         <View style={styles.flatButton}>
            <FlatButton>Esqueceu sua senha ?</FlatButton>
         </View>
         <HorizontalButton
            hrColor={styles.hrColor}
            btnTitle='ENTRAR'
            btnText='Inscrever-se'
            onPress={signUpHandler}
         />
         <GoogleBtn />
      </View>
   );
};

export default SignIn;

const styles = StyleSheet.create({
   bgImgContainer: {
      width: '100%',
      height: 420,
   },
   flatButton: {
      marginTop: 12,
      marginHorizontal: 40,
   },
   hrColor: {
      borderBottomColor: Colors.darkBlue,
   },
});
