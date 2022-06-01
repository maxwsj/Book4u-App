import { StyleSheet, Text, View } from 'react-native';
import { useContext, useState, useEffect } from 'react';

import { Colors } from '../../../constants/styles';
import Logo from '../../../componnets/UI/Logo';

import usuarioService from '../../../util/auth';

import LoadingOverlay from '../../../componnets/UI/LoadingOverlay';

import Input from '../../../componnets/UI/Input';
import FlatButton from '../../../componnets/UI/FlatButton';
import Button from '../../../componnets/UI/Button';
import HorizontalButton from '../../../componnets/UI/HorizontalButton';
import GoogleBtn from '../../../componnets/UI/GoogleBtn';

import { AuthContext } from '../../../store/auth-context';

const SignUpAuth = ({ route, navigation }) => {
   const [isInvalid, setIsInvalid] = useState(false);
   const [userAuthInput, setUserAuthInput] = useState('');
   const [registeredNumber, setRegisteredNumber] = useState('');
   const [resendToken, setResendToken] = useState(null);
   const authCtx = useContext(AuthContext);
   const [isAuthenticating, setIsAuthenticating] = useState(false);

   const { email, registerNumber } = route.params;

   useEffect(() => {
      setRegisteredNumber(registerNumber);
   }, [registeredNumber]);

   function signInHandler() {
      navigation.replace('SignIn');
   }

   async function confirmRegisterHandler() {
      if (
         userAuthInput === registeredNumber ||
         +userAuthInput === resendToken
      ) {
         setIsAuthenticating(true);
         try {
            const response = await usuarioService.confirmRegistration(
               userAuthInput
            );
            console.log(response);
            // authCtx.authenticate(token);
         } catch (error) {
            console.log(error);
            setIsInvalid(true);
         }
         setIsAuthenticating(false);
         navigation.replace('SignIn');
      } else {
         setIsInvalid(true);
      }
   }

   if (isAuthenticating) {
      return <LoadingOverlay message='Criando um usuário...' />;
   }

   function handleFormChange(enteredValue) {
      setUserAuthInput(enteredValue);
   }

   async function resendTokenHandler() {
      const newToken = await usuarioService.userRecoverToken(email);
      setResendToken(newToken);
   }

   return (
      <>
         <View style={styles.container}>
            <Logo />
            <View style={styles.wrapper}>
               <Text style={styles.title}>Verifique seu endereço de email</Text>
               <View style={styles.textWrapper}>
                  <Text style={styles.text}>
                     Enviamos um código para o seu email, {email} para
                     verificá-lo.
                  </Text>
               </View>
            </View>
            <View style={styles.buttonsWrapper}>
               <View style={styles.inputWrapper}>
                  <Input
                     inputConfig={{
                        keyboardType: 'numeric',
                        placeholder: 'Insira o código de verificação',
                        textAlign: 'center',
                        maxLength: 5,
                     }}
                     onUpdateValue={handleFormChange}
                     value={userAuthInput}
                     isInvalid={isInvalid}
                  />
               </View>
               <View style={styles.flatButton}>
                  <FlatButton onPress={resendTokenHandler}>
                     Reenviar código
                  </FlatButton>
               </View>
               <View style={styles.button}>
                  <Button onPress={confirmRegisterHandler}>Confirmar</Button>
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
      marginHorizontal: 30,
   },
   buttonsWrapper: {
      marginTop: 30,
      marginBottom: 30,
      marginHorizontal: 30,
   },
   inputWrapper: {
      marginHorizontal: 20,
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
      borderBottomColor: Colors.primary,
   },
   hrContainer: {
      marginTop: 50,
   },
});
