import { StyleSheet, Alert } from 'react-native';
import { useContext, useState } from 'react';
import SignInForm from './SignInForm';

import usuarioService from '../../util/auth';

import { AuthContext } from '../../store/auth-context';

const SignInContent = ({ onAuth }) => {
   const authCtx = useContext(AuthContext);

   const [isInvalid, setIsInvalid] = useState(false);
   const [credentialsInvalid, setCredentialsInvalid] = useState({
      email: false,
      password: false,
   });

   async function submitHandler(credentials) {
      let { email, password } = credentials;

      email = email.trim();
      password = password.trim();

      const emailIsValid = email.includes('@');
      const passwordIsValid = password.length > 6;

      if (!emailIsValid || !passwordIsValid) {
         setCredentialsInvalid({
            email: !emailIsValid,
            password: !passwordIsValid,
         });
         setIsInvalid(true);
         return;
      } else {
         onAuth(true);
         try {
            const response = await usuarioService.userDataValidation(
               credentials
            );

            if (response.request._response === 'E-mail pendente') {
               throw new Error(`E-mail pendente`);
            }
            console.log(response);
            authCtx.authenticate(response.data.access_token);
         } catch (error) {
            if (error.message == 'E-mail pendente') {
               Alert.alert(
                  'Autenticação mal-sucedida!',
                  'Por favor verifique seu email!'
               );
            }
            if (error.message == 'Request failed with status code 401') {
               Alert.alert(
                  'Autenticação mal-sucedida!',
                  'Você digitou os dados incorretos!'
               );
            }
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
