import { StyleSheet, View } from 'react-native';
import { useState } from 'react';

import { Colors } from '../../constants/styles';
import InputIcon from '../UI/InputIcon';
import Button from '../UI/Button';

const SignInForm = ({ onSubmit, credentialsInvalid }) => {
   const [enteredUsername, setEnteredUsername] = useState('');
   const [enteredPassword, setEnteredPassword] = useState('');
   const [visible, setVisibility] = useState(false);
   const [secureTextEntry, setSecureTextEntry] = useState(true);

   const icon = !visible ? 'eye-off-outline' : 'eye-outline';

   const { username: usernameIsInvalid, password: passwordIsInvalid } =
      credentialsInvalid;

   function updateInputValueHandler(inputType, enteredValue) {
      switch (inputType) {
         case 'username':
            setEnteredUsername(enteredValue);
            break;
         case 'password':
            setEnteredPassword(enteredValue);
            break;
      }
   }

   function submitHandler() {
      onSubmit({
         username: enteredUsername,
         password: enteredPassword,
      });
   }

   function iconBtnHandler() {
      setVisibility(!visible);
      setSecureTextEntry(!secureTextEntry);
   }

   return (
      <View style={styles.loginFormContainer}>
         <View>
            <InputIcon
               onUpdateValue={updateInputValueHandler.bind(this, 'username')}
               value={enteredUsername}
               isInvalid={usernameIsInvalid}
               inputConfig={{
                  placeholder: 'Email',
                  keyboardType: 'email-address',
                  autoCapitalize: 'none',
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
                  secureTextEntry: secureTextEntry,
               }}
               iconConfig={{
                  name: 'md-lock-closed-outline',
                  size: 20,
                  color: Colors.silver200,
               }}
               children='* Dados incorretos'
               InvalidInputTxtStyle={styles.InvalidInputMargin}
               setIcon={true}
               iconBtnConfig={{
                  name: icon,
                  size: 20,
                  color: Colors.silver200,
               }}
               onIconBtnPress={iconBtnHandler}
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
