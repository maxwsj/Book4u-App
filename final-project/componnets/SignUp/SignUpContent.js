import { StyleSheet } from 'react-native';
import { useState } from 'react';
import SignUpForm from './SignUpForm';

const SignUpContent = ({ onSubmitUser, isInvalid }) => {
   const [isValid, setIsValid] = useState(false);

   const [credentialsInvalid, setCredentialsInvalid] = useState({
      firstName: false,
      lastName: false,
      email: false,
      password: false,
      confirmPassword: false,
      cpf: false,
      cellphone: false,
      telephone: false,
   });

   function submitHandler(userDataValidation) {
      let {
         firstName,
         lastName,
         email,
         password,
         confirmPassword,
         cpf,
         cellphone,
         telephone,
      } = userDataValidation;

      firstName = firstName.trim();
      lastName = lastName.trim();
      email = email.trim();
      cpf = cpf.trim();
      cellphone = cellphone.trim();

      const firstNameIsValid = firstName.length > 0;
      const lastNameIsValid = lastName.length > 0;
      const emailIsValid = email.includes('@');
      const passwordIsValid = password.length > 8;
      const passwordsAreEqual = password === confirmPassword;
      const cpfIsValid = cpf.length > 10;
      const cellphoneIsValid = cellphone.length > 0;

      if (
         !firstNameIsValid ||
         !lastNameIsValid ||
         !emailIsValid ||
         !passwordIsValid ||
         !passwordsAreEqual ||
         !cpfIsValid ||
         !cellphoneIsValid
      ) {
         setCredentialsInvalid({
            firstName: !firstNameIsValid,
            lastName: !lastNameIsValid,
            email: !emailIsValid,
            password: !passwordIsValid,
            confirmPassword: !passwordIsValid || !passwordsAreEqual,
            cpf: !cpfIsValid,
            cellphone: !cellphoneIsValid,
         });
      } else {
         onSubmitUser({
            userSituation: {
               name: 'Pendente',
            },
            personalData: {
               email: email,
               password: password,
               cpf: cpf,
               cellphone: cellphone,
               telephone: telephone,
               address: '',
               complement: '',
               token: '',
            },
            credits: '',
            firstName: firstName,
            lastName: lastName,
            picture: '',
            registerNumber: '',
         });
         setIsValid(true);
         // onValidating(isValid);
      }
   }

   return (
      <SignUpForm
         onSubmit={submitHandler}
         credentialsInvalid={credentialsInvalid}
         isInvalid={isInvalid}
      />
   );
};

export default SignUpContent;

const styles = StyleSheet.create({});
