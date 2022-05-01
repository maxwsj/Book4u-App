import { View, StyleSheet } from 'react-native';
import { useState } from 'react';

import { Colors } from '../../../constants/styles';

import FlatButton from '../../../componnets/UI/FlatButton';
import HorizontalButton from '../../../componnets/UI/HorizontalButton';
import GoogleBtn from '../../../componnets/UI/GoogleBtn';

import SignInForm from '../../../componnets/SignIn/SignInForm';
import SignInBgImage from '../../../componnets/SignIn/SignInBgImage';

const SignIn = ({ navigation }) => {
   const [isInvalid, setIsInvalid] = useState(false);

   function signUpHandler() {
      navigation.replace('SignUp');
   }
   function passwordRecoverHandler() {
      navigation.replace('PasswordRecover');
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
         setIsInvalid(true);
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
            isInvalid={isInvalid}
         />

         <View style={styles.flatButton}>
            <FlatButton onPress={passwordRecoverHandler}>
               Recuperar sua conta ?
            </FlatButton>
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
      zIndex: 10,
   },
   flatButton: {
      marginTop: 12,
      marginHorizontal: 40,
   },
   hrColor: {
      borderBottomColor: Colors.darkBlue,
   },
});
