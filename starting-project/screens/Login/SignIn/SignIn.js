import { View, StyleSheet, Dimensions } from 'react-native';
import { useState } from 'react';

import { Colors } from '../../../constants/styles';

import FlatButton from '../../../componnets/UI/FlatButton';
import HorizontalButton from '../../../componnets/UI/HorizontalButton';
import GoogleBtn from '../../../componnets/UI/GoogleBtn';

import SignInBgImage from '../../../componnets/SignIn/SignInBgImage';
import SignInContent from '../../../componnets/SignIn/SignInContent';
import LoadingOverlay from '../../../componnets/UI/LoadingOverlay';

const { width } = Dimensions.get('window');

const SignIn = ({ navigation }) => {
   const [isAuthenticating, setIsAuthenticating] = useState(false);

   function signUpHandler() {
      navigation.replace('SignUp');
   }
   function passwordRecoverHandler() {
      navigation.replace('PasswordRecover');
   }

   function authenticatingHandler(boolean) {
      setIsAuthenticating(boolean);
   }

   if (isAuthenticating) {
      return <LoadingOverlay message='Entrando...' />;
   }

   return (
      <View>
         <View style={styles.bgImgContainer}>
            <SignInBgImage />
         </View>
         <SignInContent onAuth={authenticatingHandler} />

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
      width: width,
      height: width,
      zIndex: 10,
      marginBottom: 30,
   },
   flatButton: {
      marginTop: 30,
      marginHorizontal: 40,
   },
   hrColor: {
      borderBottomColor: Colors.secondary,
   },
});
