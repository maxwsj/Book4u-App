import { StyleSheet, View } from 'react-native';
import { useState } from 'react';

import Input from '../UI/Input';
import Button from '../UI/Button';

const SignUpForm = ({ onSubmit, credentialsInvalid }) => {
   const [formData, setFormData] = useState({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
      rg: '',
      cpf: '',
      cellphone: '',
      telephone: '',
   });

   const {
      firstName: firstNameIsInvalid,
      lastName: lastNameIsInvalid,
      email: emailIsInvalid,
      password: passwordIsInvalid,
      confirmPassword: passwordsDontMatch,
      rg: rgIsInvalid,
      cpf: cpfIsInvalid,
      cellphone: cellphoneIsInvalid,
      telephone: telephoneIsInvalid,
   } = credentialsInvalid;

   function updateInputValueHandler(inputIdentifier, enteredValue) {
      setFormData((curInputs) => {
         return {
            ...curInputs,
            [inputIdentifier]: enteredValue,
         };
      });
   }

   function submitHandler() {
      onSubmit({
         firstName: formData.firstName,
         lastName: formData.lastName,
         email: formData.email,
         password: formData.password,
         confirmPassword: formData.confirmPassword,
         rg: formData.rg,
         cpf: formData.cpf,
         cellphone: formData.cellphone,
         telephone: formData.telephone,
      });
   }

   return (
      <>
         <View>
            <Input
               onUpdateValue={updateInputValueHandler.bind(this, 'firstName')}
               value={formData.firstName}
               isInvalid={firstNameIsInvalid}
               inputConfig={{
                  placeholder: 'Nome',
               }}
               inputContainer={styles.inputContainer}
            />
         </View>
         <View>
            <Input
               onUpdateValue={updateInputValueHandler.bind(this, 'lastName')}
               value={formData.lastName}
               isInvalid={lastNameIsInvalid}
               inputConfig={{
                  placeholder: 'Sobrenome',
               }}
               inputContainer={styles.inputContainer}
            />
         </View>
         <View>
            <Input
               onUpdateValue={updateInputValueHandler.bind(this, 'email')}
               value={formData.email}
               isInvalid={emailIsInvalid}
               inputConfig={{
                  placeholder: 'Email',
                  keyboardType: 'email-address',
                  autoCapitalize: 'none',
               }}
               inputContainer={styles.inputContainer}
            />
         </View>
         <View>
            <Input
               onUpdateValue={updateInputValueHandler.bind(this, 'password')}
               value={formData.password}
               isInvalid={passwordIsInvalid}
               inputConfig={{
                  placeholder: 'Insira uma senha',
               }}
               inputContainer={styles.inputContainer}
            />
         </View>
         <View>
            <Input
               onUpdateValue={updateInputValueHandler.bind(
                  this,
                  'confirmPassword'
               )}
               value={formData.confirmPassword}
               isInvalid={passwordsDontMatch}
               inputConfig={{
                  placeholder: 'Insira a senha novamente',
               }}
               inputContainer={styles.inputContainer}
            />
         </View>
         <View>
            <Input
               onUpdateValue={updateInputValueHandler.bind(this, 'cpf')}
               value={formData.cpf}
               isInvalid={cpfIsInvalid}
               inputConfig={{
                  placeholder: 'CPF: (Sem ponto)',
                  keyboardType: 'numeric',
                  maxLength: 11,
               }}
               inputContainer={styles.inputContainer}
            />
         </View>
         <View>
            <Input
               onUpdateValue={updateInputValueHandler.bind(this, 'rg')}
               value={formData.rg}
               isInvalid={rgIsInvalid}
               inputConfig={{
                  placeholder: 'RG: (Sem ponto)',
                  keyboardType: 'numeric',
                  maxLength: 9,
               }}
               inputContainer={styles.inputContainer}
            />
         </View>
         <View>
            <Input
               onUpdateValue={updateInputValueHandler.bind(this, 'cellphone')}
               value={formData.cellphone}
               isInvalid={cellphoneIsInvalid}
               inputConfig={{
                  placeholder: 'Celular',
                  keyboardType: 'numeric',
                  maxLength: 11,
               }}
               inputContainer={styles.inputContainer}
            />
         </View>
         <View>
            <Input
               onUpdateValue={updateInputValueHandler.bind(this, 'telephone')}
               value={formData.telephone}
               inputConfig={{
                  placeholder: 'Telefone Fixo',
                  keyboardType: 'numeric',
                  maxLength: 10,
               }}
               inputContainer={styles.inputContainer}
            />
         </View>
         <View style={styles.button}>
            <Button onPress={submitHandler}>Próximo</Button>
         </View>
      </>
   );
};

export default SignUpForm;

const styles = StyleSheet.create({
   inputContainer: {
      marginTop: 14,
   },
   button: {
      marginTop: 40,
      marginHorizontal: 30,
   },
});
