import { View, StyleSheet } from 'react-native';
import { useState } from 'react';

import { Colors } from '../../../constants/styles';

import FlatButton from '../../../componnets/UI/FlatButton';
import HorizontalButton from '../../../componnets/UI/HorizontalButton';
import GoogleBtn from '../../../componnets/UI/GoogleBtn';

import SignInForm from '../../../componnets/SignIn/SignInForm';
import SignInBgImage from '../../../componnets/SignIn/SignInBgImage';

import usuarioService from '../../../util/auth';

const SignIn = ({ navigation }) => {
   const [isInvalid, setIsInvalid] = useState(false);

   function signUpHandler() {
      navigation.replace('SignUp');
   }
   function passwordRecoverHandler() {
      navigation.replace('PasswordRecover');
   }

   const [credentialsInvalid, setCredentialsInvalid] = useState({
      username: false,
      password: false,
   });

   async function submitHandler(credentials) {
      let { username, password } = credentials;

      username = username.trim();
      password = password.trim();

      const usernameIsValid = username.includes('@');
      const passwordIsValid = password.length > 6;

      if (!usernameIsValid || !passwordIsValid) {
         setCredentialsInvalid({
            username: !usernameIsValid,
            password: !passwordIsValid,
         });
         setIsInvalid(true);
         return;
      } else {
         const response = await usuarioService.userDataValidation(credentials);
         console.log(response.data.user.userSituation.name);
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
