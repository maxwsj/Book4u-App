import { StyleSheet, Alert } from 'react-native';
import { useContext, useState } from 'react';
import SignInForm from './SignInForm';

import LoadingOverlay from '../UI/LoadingOverlay';

import usuarioService from '../../util/auth';

import { AuthContext } from '../../store/auth-context';

const SignInContent = ({ onAuth }) => {
   const authCtx = useContext(AuthContext);
   const [isInvalid, setIsInvalid] = useState(false);
   const [credentialsInvalid, setCredentialsInvalid] = useState({
      username: false,
      password: false,
   });
   let token = Math.random().toString();

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
         onAuth(true);
         try {
            await usuarioService.userDataValidation(credentials);
            authCtx.authenticate(token);
         } catch (error) {
            Alert.alert(
               'Autenticação mal-sucedida!',
               'Você digitou os dados incorretos!'
            );
            onAuth(false);
         }
      }
   }

   return (
      <SignInForm
         onSubmit={submitHandler}
         credentialsInvalid={credentialsInvalid}
         isInvalid={isInvalid}
      />
   );
};

export default SignInContent;

const styles = StyleSheet.create({});
