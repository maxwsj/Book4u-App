import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

import { Colors } from '../../../constants/styles';
import Logo from '../../../componnets/UI/Logo';

import Input from '../../../componnets/UI/Input';
import FlatButton from '../../../componnets/UI/FlatButton';
import Button from '../../../componnets/UI/Button';
import HorizontalButton from '../../../componnets/UI/HorizontalButton';
import GoogleBtn from '../../../componnets/UI/GoogleBtn';

const SignUpAuth = () => {
   return (
      <>
         <View style={styles.container}>
            <Logo />
            <View style={styles.wrapper}>
               <Text style={styles.title}>Verifique seu endereço de email</Text>
               <View style={styles.textWrapper}>
                  <Text style={styles.text}>
                     Enviamos um código para o seu email, fulano@hotmail.com
                     para verificá-lo.
                  </Text>
               </View>
            </View>
            <View style={styles.buttonsWrapper}>
               <View style={styles.inputWrapper}>
                  <Input
                     inputConfig={{
                        placeholder: 'Insira o código de verificação',
                     }}
                  />
               </View>
               <View style={styles.flatButton}>
                  <FlatButton>Reenviar código</FlatButton>
               </View>
               <View style={styles.button}>
                  <Button>Criar sua conta</Button>
               </View>
            </View>
            <HorizontalButton
               hrContainer={styles.hrContainer}
               hrColor={styles.hrColor}
               btnTitle='Possui uma conta ?'
               btnText='Clique aqui !'
            />
            <GoogleBtn />
         </View>
      </>
   );
};

export default SignUpAuth;

const styles = StyleSheet.create({
   container: {
      marginTop: 80,
   },
   wrapper: {
      marginTop: 60,
      justifyContent: 'center',
      alignItems: 'center',
   },
   textWrapper: {
      marginTop: 50,
      marginBottom: 30,
      marginHorizontal: 10,
   },
   buttonsWrapper: {
      marginTop: 30,
      marginBottom: 30,
      marginHorizontal: 30,
   },
   inputWrapper: {
      marginHorizontal: 50,
   },
   title: {
      fontSize: 24,
      color: Colors.silver400,
   },
   text: {
      textAlign: 'center',
      color: Colors.silver400,
   },
   button: {
      marginTop: 50,
   },
   flatButton: {
      marginTop: 12,
      marginHorizontal: 40,
   },
   hrColor: {
      borderBottomColor: Colors.dandelion,
   },
   hrContainer: {
      marginTop: 50,
   },
});
