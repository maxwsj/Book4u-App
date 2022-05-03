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
      rg: false,
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
         rg,
         cpf,
         cellphone,
         telephone,
      } = userDataValidation;

      firstName = firstName.trim();
      lastName = lastName.trim();
      email = email.trim();
      rg = rg.trim();
      cpf = cpf.trim();
      cellphone = cellphone.trim();

      const firstNameIsValid = firstName.length > 0;
      const lastNameIsValid = lastName.length > 0;
      const emailIsValid = email.includes('@');
      const passwordIsValid = password.length > 0;
      const passwordsAreEqual = password === confirmPassword;
      const rgIsValid = rg.length > 0;
      // const rgIsValid = rg.length > 8;
      const cpfIsValid = cpf.length > 0;
      // const cpfIsValid = cpf.length > 10;
      const cellphoneIsValid = cellphone.length > 0;

      if (
         !firstNameIsValid ||
         !lastNameIsValid ||
         !emailIsValid ||
         !passwordIsValid ||
         !passwordsAreEqual ||
         !rgIsValid ||
         !cpfIsValid ||
         !cellphoneIsValid
      ) {
         setCredentialsInvalid({
            firstName: !firstNameIsValid,
            lastName: !lastNameIsValid,
            email: !emailIsValid,
            password: !passwordIsValid,
            confirmPassword: !passwordIsValid || passwordsAreEqual,
            rg: !rgIsValid,
            cpf: !cpfIsValid,
            cellphone: !cellphoneIsValid,
         });
      }
      onSubmitUser({
         userSituation: {
            name: 'Pendente',
         },
         personalData: {
            email: email,
            password: password,
            rg: rg,
            cpf: cpf,
            cellphone: cellphone,
            telephone: telephone,
         },
         firstName: firstName,
         lastName: lastName,
         profileImage: '',
         registerNumber: '',
      });
      setIsValid(true);
      // onValidating(isValid);
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
