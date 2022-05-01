import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';

import { Colors } from '../../../constants/styles';
import Logo from '../../../componnets/UI/Logo';

import Input from '../../../componnets/UI/Input';
import Button from '../../../componnets/UI/Button';
import HorizontalButton from '../../../componnets/UI/HorizontalButton';
import GoogleBtn from '../../../componnets/UI/GoogleBtn';

const PasswordRecoverAuth = ({ navigation }) => {
   const [isInvalid, setIsInvalid] = useState(false);
   const [userEmailInput, setUserEmailInput] = useState('');

   function signInHandler() {
      navigation.replace('SignIn');
   }

   function emailHandler() {
      navigation.replace('PasswordRecoverAuth', { email: userEmailInput });
   }

   function handleFormChange(enteredValue) {
      setUserEmailInput(enteredValue);
   }

   return (
      <>
         <View style={styles.container}>
            <Logo />
            <View style={styles.titleWrapper}>
               <Text style={styles.title}>
                  Insira seu email para recuperar sua conta.
               </Text>
            </View>
            <View style={styles.buttonsWrapper}>
               <View style={styles.inputWrapper}>
                  <Input
                     inputConfig={{
                        keyboardType: 'email-address',
                        placeholder: 'Insira o email cadastrado',
                        textAlign: 'center',
                     }}
                     onUpdateValue={handleFormChange}
                     value={userEmailInput}
                     isInvalid={isInvalid}
                  />
               </View>

               <View style={styles.button}>
                  <Button onPress={emailHandler}>Próximo</Button>
               </View>
            </View>
         </View>
         <HorizontalButton
            hrContainer={styles.hrContainer}
            hrColor={styles.hrColor}
            btnTitle='Possui uma conta ?'
            btnText='Clique aqui !'
            onPress={signInHandler}
         />
         <GoogleBtn />
      </>
   );
};

export default PasswordRecoverAuth;

const styles = StyleSheet.create({
   container: {
      marginTop: 80,
   },
   titleWrapper: {
      marginTop: 60,
      justifyContent: 'center',
      alignItems: 'center',
      marginHorizontal: 30,
   },
   textWrapper: {
      marginTop: 50,
      marginBottom: 30,
   },
   buttonsWrapper: {
      marginTop: 70,
      marginBottom: 60,
   },
   inputWrapper: {},
   title: {
      fontSize: 24,
      color: Colors.silver400,
      textAlign: 'center',
   },
   button: {
      marginTop: 100,
      marginHorizontal: 30,
   },
   hrColor: {
      borderBottomColor: Colors.lightCyan,
   },
   hrContainer: {
      marginTop: 50,
   },
});
