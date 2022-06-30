import { StyleSheet, Text, View } from 'react-native';
import { useState, useEffect } from 'react';

import { Colors } from '../../../constants/styles';

import Logo from '../../../componnets/UI/Logo';
import HorizontalButton from '../../../componnets/UI/HorizontalButton';
import GoogleBtn from '../../../componnets/UI/GoogleBtn';
import Input from '../../../componnets/UI/Input';
import Button from '../../../componnets/UI/Button';

import usuarioService from '../../../util/auth';

const NewPassword = ({ route, navigation }) => {
   const { email } = route.params;
   const [isInvalid, setIsInvalid] = useState(false);
   const [passwordForm, setPasswordForm] = useState({
      newPassword: '',
      confirmPassword: '',
   });

   function signInHandler() {
      navigation.replace('SignIn');
   }

   function updateInputValueHandler(inputIdentifier, enteredValue) {
      setPasswordForm((curInputs) => {
         return {
            ...curInputs,
            [inputIdentifier]: enteredValue,
         };
      });
   }

   async function updatePasswordHandler() {
      const password = { password: passwordForm.newPassword };
      const isEmptyNewPass = passwordForm.newPassword.length > 0;
      const isEmptyConfirmPass = passwordForm.confirmPassword.length > 0;
      const areEqual =
         passwordForm.newPassword === passwordForm.confirmPassword;

      if (!isEmptyNewPass || !isEmptyConfirmPass || !areEqual) {
         setIsInvalid(true);
      } else {
         await usuarioService.userRecoverPassword(email, password);
         navigation.replace('SignIn');
      }
   }

   return (
      <>
         <View style={styles.container}>
            <Logo />
         </View>
         <View style={styles.titleWrapper}>
            <Text style={styles.title}>Recuperação de senha.</Text>
         </View>
         <View style={styles.inputWrapper}>
            <Input
               onUpdateValue={updateInputValueHandler.bind(this, 'newPassword')}
               inputConfig={{
                  placeholder: 'Insira a senha',
               }}
               value={passwordForm.newPassword}
               isInvalid={isInvalid}
               children='* Dados incorretos'
            />
            <Input
               onUpdateValue={updateInputValueHandler.bind(
                  this,
                  'confirmPassword'
               )}
               inputConfig={{
                  placeholder: 'Repita a senha',
               }}
               value={passwordForm.confirmPassword}
               isInvalid={isInvalid}
               children='* Dados incorretos'
            />
         </View>

         <View style={styles.button}>
            <Button onPress={updatePasswordHandler}>Confirmar</Button>
         </View>

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
      </>
   );
};

export default NewPassword;

const styles = StyleSheet.create({
   container: {
      marginTop: 80,
   },

   inputWrapper: {
      marginTop: 60,
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
      fontSize: 24,
      fontFamily: 'montserrat-regular',
      textAlign: 'center',
   },
   titleWrapper: {
      marginTop: 60,
      justifyContent: 'center',
      alignItems: 'center',
      marginHorizontal: 30,
   },
   button: {
      marginTop: 60,
      marginHorizontal: 30,
   },
});
