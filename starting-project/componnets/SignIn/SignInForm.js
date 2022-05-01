import { StyleSheet, View } from 'react-native';
import { useState } from 'react';

import { Colors } from '../../constants/styles';
import InputIcon from '../UI/InputIcon';
import Button from '../UI/Button';

const SignInForm = ({ onSubmit, credentialsInvalid }) => {
   const [enteredEmail, setEnteredEmail] = useState('');
   const [enteredPassword, setEnteredPassword] = useState('');

   const { email: emailIsInvalid, password: passwordIsInvalid } =
      credentialsInvalid;

   function updateInputValueHandler(inputType, enteredValue) {
      switch (inputType) {
         case 'email':
            setEnteredEmail(enteredValue);
            break;
         case 'password':
            setEnteredPassword(enteredValue);
            break;
      }
   }

   function submitHandler() {
      onSubmit({
         email: enteredEmail,
         password: enteredPassword,
      });
   }

   return (
      <View style={styles.loginFormContainer}>
         <View>
            <InputIcon
               onUpdateValue={updateInputValueHandler.bind(this, 'email')}
               value={enteredEmail}
               isInvalid={emailIsInvalid}
               inputConfig={{
                  placeholder: 'Usuário',
                  keyboardType: 'email-address',
               }}
               iconConfig={{
                  name: 'person-outline',
                  size: 20,
                  color: Colors.silver200,
               }}
               children='* Dados incorretos'
               InvalidInputTxtStyle={styles.InvalidInputMargin}
            />
         </View>
         <View style={styles.inputItem}>
            <InputIcon
               onUpdateValue={updateInputValueHandler.bind(this, 'password')}
               value={enteredPassword}
               isInvalid={passwordIsInvalid}
               inputConfig={{
                  placeholder: 'Senha',
                  secureTextEntry: true,
               }}
               iconConfig={{
                  name: 'md-lock-closed-outline',
                  size: 20,
                  color: Colors.silver200,
               }}
               children='* Dados incorretos'
               InvalidInputTxtStyle={styles.InvalidInputMargin}
            />
         </View>
         <View style={styles.button}>
            <Button onPress={submitHandler}>Entrar</Button>
         </View>
      </View>
   );
};

export default SignInForm;

const styles = StyleSheet.create({
   loginFormContainer: {
      marginHorizontal: 22,
   },
   inputItem: {
      marginTop: 16,
   },
   button: {
      marginTop: 40,
      marginHorizontal: 40,
   },
   InvalidInputMargin: {
      marginLeft: -30,
   },
});
