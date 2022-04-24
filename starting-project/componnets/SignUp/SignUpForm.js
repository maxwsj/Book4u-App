import { StyleSheet, View } from 'react-native';
import React from 'react';
import Input from '../UI/Input';

const SignUpForm = () => {
   function SignUpFormPT1() {
      return (
         <>
            <Input
               inputConfig={{
                  placeholder: 'Nome',
               }}
               inputContainer={styles.inputContainer}
            />
            <Input
               inputConfig={{
                  placeholder: 'Sobrenome',
               }}
               inputContainer={styles.inputContainer}
            />
            <Input
               inputConfig={{
                  placeholder: 'Email',
                  keyboardType: 'email-address',
               }}
               inputContainer={styles.inputContainer}
            />
            <Input
               inputConfig={{
                  placeholder: 'Insira uma senha',
               }}
               inputContainer={styles.inputContainer}
            />
            <Input
               inputConfig={{
                  placeholder: 'Insira a senha novamente',
               }}
               inputContainer={styles.inputContainer}
            />
         </>
      );
   }
   function SignUpFormPT2() {
      return (
         <>
            <Input
               inputConfig={{
                  placeholder: 'CPF',
                  keyboardType: 'numeric',
               }}
               inputContainer={styles.inputContainer}
            />
            <Input
               inputConfig={{
                  placeholder: 'RG',
                  keyboardType: 'numeric',
               }}
               inputContainer={styles.inputContainer}
            />
            <Input
               inputConfig={{
                  placeholder: 'Celular',
                  keyboardType: 'numeric',
               }}
               inputContainer={styles.inputContainer}
            />
            <Input
               inputConfig={{
                  placeholder: 'Telefone Fixo',
                  keyboardType: 'numeric',
               }}
               inputContainer={styles.inputContainer}
            />
         </>
      );
   }

   return (
      <>
         {/* <SignUpFormPT1 /> */}
         <SignUpFormPT2 />
      </>
   );
};

export default SignUpForm;

const styles = StyleSheet.create({
   inputContainer: {
      marginTop: 18,
   },
   // formContainerPT1: {
   //    marginTop: 40,
   // },
   // formContainerPT2: {
   //    marginTop: 105,
   // },
});
