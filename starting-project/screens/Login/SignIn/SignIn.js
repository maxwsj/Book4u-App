import { View, StyleSheet } from 'react-native';
import React from 'react';

import { Colors } from '../../../constants/styles';

import Button from '../../../componnets/UI/Button';
import FlatButton from '../../../componnets/UI/FlatButton';
import HorizontalButton from '../../../componnets/UI/HorizontalButton';
import GoogleBtn from '../../../componnets/UI/GoogleBtn';

import SignInContainer from '../../../componnets/SignIn/SignInContainer';
import SignInBgImage from '../../../componnets/SignIn/SignInBgImage';

const SignUp = () => {
   return (
      <View>
         <View style={styles.bgImgContainer}>
            <SignInBgImage />
         </View>
         <SignInContainer />
         <View style={styles.button}>
            <Button>Entrar</Button>
         </View>
         <View style={styles.flatButton}>
            <FlatButton>Esqueceu sua senha ?</FlatButton>
         </View>
         <HorizontalButton
            hrColor={styles.hrColor}
            btnTitle='ENTRAR'
            btnText='Inscrever-se'
         />
         <GoogleBtn />
      </View>
   );
};

export default SignUp;

const styles = StyleSheet.create({
   bgImgContainer: {
      width: '100%',
      height: 420,
   },

   button: {
      marginTop: 40,
      marginHorizontal: 40,
   },

   flatButton: {
      marginTop: 12,
      marginHorizontal: 40,
   },

   hrColor: {
      borderBottomColor: Colors.darkBlue,
   },
});
