import { StyleSheet, View } from 'react-native';
import { useState } from 'react';

import { Colors } from '../../constants/styles';

import Input from '../UI/Input';
import Button from '../UI/Button';

const SignUpForm = ({ onSubmit, credentialsInvalid, isInvalid }) => {
   const [visible, setVisibility] = useState(false);
   const [secureTextEntry, setSecureTextEntry] = useState(true);

   const icon = !visible ? 'eye-off-outline' : 'eye-outline';

   function iconBtnHandler() {
      setVisibility(!visible);
      setSecureTextEntry(!secureTextEntry);
   }

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
               isInvalid={firstNameIsInvalid || isInvalid}
               inputConfig={{
                  placeholder: 'Nome',
               }}
               inputContainer={styles.inputContainer}
               children='* Dados incorretos'
            />
         </View>
         <View>
            <Input
               onUpdateValue={updateInputValueHandler.bind(this, 'lastName')}
               value={formData.lastName}
               isInvalid={lastNameIsInvalid || isInvalid}
               inputConfig={{
                  placeholder: 'Sobrenome',
               }}
               inputContainer={styles.inputContainer}
               children='* Dados incorretos'
            />
         </View>
         <View>
            <Input
               onUpdateValue={updateInputValueHandler.bind(this, 'email')}
               value={formData.email}
               isInvalid={emailIsInvalid || isInvalid}
               inputConfig={{
                  placeholder: 'Email',
                  keyboardType: 'email-address',
                  autoCapitalize: 'none',
               }}
               inputContainer={styles.inputContainer}
               children='* Dados incorretos'
            />
         </View>
         <View>
            <Input
               onUpdateValue={updateInputValueHandler.bind(this, 'password')}
               value={formData.password}
               isInvalid={passwordIsInvalid || isInvalid}
               inputConfig={{
                  placeholder: 'Insira uma senha (mín. 9 caracteres)',
                  secureTextEntry: secureTextEntry,
               }}
               inputContainer={styles.inputContainer}
               children='* Dados incorretos'
               setIcon={true}
               iconBtnConfig={{
                  name: icon,
                  size: 20,
                  color: Colors.silver200,
               }}
               onIconBtnPress={iconBtnHandler}
            />
         </View>
         <View>
            <Input
               onUpdateValue={updateInputValueHandler.bind(
                  this,
                  'confirmPassword'
               )}
               value={formData.confirmPassword}
               isInvalid={passwordsDontMatch || isInvalid}
               inputConfig={{
                  placeholder: 'Insira a senha novamente',
                  secureTextEntry: true,
               }}
               inputContainer={styles.inputContainer}
               children='* Dados incorretos'
            />
         </View>
         <View>
            <Input
               onUpdateValue={updateInputValueHandler.bind(this, 'cpf')}
               value={formData.cpf}
               isInvalid={cpfIsInvalid || isInvalid}
               inputConfig={{
                  placeholder: 'CPF: (Somento números)',
                  keyboardType: 'numeric',
                  maxLength: 11,
               }}
               inputContainer={styles.inputContainer}
               children='* Dados incorretos'
               iconBtnConfig={styles.iconBtnConfig}
            />
         </View>
         <View>
            <Input
               onUpdateValue={updateInputValueHandler.bind(this, 'rg')}
               value={formData.rg}
               isInvalid={rgIsInvalid || isInvalid}
               inputConfig={{
                  placeholder: 'RG: (Somento números)',
                  keyboardType: 'numeric',
                  maxLength: 9,
               }}
               inputContainer={styles.inputContainer}
               children='* Dados incorretos'
            />
         </View>
         <View>
            <Input
               onUpdateValue={updateInputValueHandler.bind(this, 'cellphone')}
               value={formData.cellphone}
               isInvalid={cellphoneIsInvalid || isInvalid}
               inputConfig={{
                  placeholder: 'Celular',
                  keyboardType: 'numeric',
                  maxLength: 11,
               }}
               inputContainer={styles.inputContainer}
               children='* Dados incorretos'
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
               children='* Dados incorretos'
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
