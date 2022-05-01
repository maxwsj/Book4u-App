import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

import { Colors } from '../../../constants/styles';

import Logo from '../../../componnets/UI/Logo';
import HorizontalButton from '../../../componnets/UI/HorizontalButton';
import GoogleBtn from '../../../componnets/UI/GoogleBtn';
import Input from '../../../componnets/UI/Input';
import Button from '../../../componnets/UI/Button';

const NewPassword = ({ navigation }) => {
   function signInHandler() {
      navigation.replace('SignIn');
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
               inputConfig={{
                  placeholder: 'Insira a senha',
               }}
            />
            <Input
               inputConfig={{
                  placeholder: 'Repita a senha',
               }}
            />
         </View>

         <View style={styles.button}>
            <Button>Confirmar</Button>
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
   titleWrapper: {
      marginTop: 60,
      justifyContent: 'center',
      alignItems: 'center',
      marginHorizontal: 30,
   },
   title: {
      fontSize: 24,
      color: Colors.silver400,
      textAlign: 'center',
   },
   button: {
      marginTop: 60,
      marginHorizontal: 30,
   },
});
