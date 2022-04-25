import { StyleSheet, View } from 'react-native';
import { useState } from 'react';
import Input from '../UI/Input';
import Button from '../UI/Button';
import SignUpAuth from '../../screens/Login/SignUp/SignUpAuth';

const SignUpForm = ({ onSubmit }) => {
   const [isFilled, setIsFilled] = useState(!true);

   function nextFormHandler() {
      setIsFilled(true);
   }

   function SignUpFormPT1({ onSubmit }) {
      const [formPT1, setFormPT1] = useState({
         name: '',
         nickname: '',
         email: '',
         password: '',
         confirmPassword: '',
      });

      function handleFormChange(inputIdentifier, enteredValue) {
         setFormPT1((curInputs) => {
            return {
               ...curInputs,
               [inputIdentifier]: enteredValue,
            };
         });
      }
      function submitHandler() {
         nextFormHandler();
         onSubmit({
            name: formPT1.name,
            nickname: formPT1.nickname,
            email: formPT1.email,
            password: formPT1.password,
            confirmPassword: formPT1.confirmPassword,
         });
      }
      return (
         <>
            <Input
               onUpdateValue={handleFormChange.bind(this, 'name')}
               value={formPT1.name}
               // isInvalid={nameIsInvalid}
               inputConfig={{
                  placeholder: 'Nome',
               }}
               inputContainer={styles.inputContainer}
            />
            <Input
               onUpdateValue={handleFormChange.bind(this, 'nickname')}
               value={formPT1.nickname}
               //isInvalid={nicknameIsInvalid}
               inputConfig={{
                  placeholder: 'Sobrenome',
               }}
               inputContainer={styles.inputContainer}
            />
            <Input
               onUpdateValue={handleFormChange.bind(this, 'email')}
               value={formPT1.email}
               //isInvalid={emailIsInvalid}
               inputConfig={{
                  placeholder: 'Email',
                  keyboardType: 'email-address',
                  autoCapitalize: 'none',
               }}
               inputContainer={styles.inputContainer}
            />
            <Input
               onUpdateValue={handleFormChange.bind(this, 'password')}
               value={formPT1.password}
               //isInvalid={passwordIsInvalid}
               inputConfig={{
                  placeholder: 'Insira uma senha',
               }}
               inputContainer={styles.inputContainer}
            />
            <Input
               onUpdateValue={handleFormChange.bind(this, 'confirmPassword')}
               value={formPT1.confirmPassword}
               //isInvalid={confirmPasswordIsInvalid}
               inputConfig={{
                  placeholder: 'Insira a senha novamente',
               }}
               inputContainer={styles.inputContainer}
            />
            <View style={styles.button}>
               <Button onPress={submitHandler}>Próximo</Button>
            </View>
         </>
      );
   }
   function SignUpFormPT2({ onSubmit }) {
      const [formPT2, setFormPT2] = useState({
         rg: '',
         cpf: '',
         cellphone: '',
         telephone: '',
      });

      function handleFormChange(inputIdentifier, enteredValue) {
         setFormPT2((curInputs) => {
            return {
               ...curInputs,
               [inputIdentifier]: enteredValue,
            };
         });
      }

      function submitHandler() {
         onSubmit({
            rg: formPT2.rg,
            cpf: formPT2.cpf,
            cellphone: formPT2.cellphone,
            telephone: formPT2.telephone,
         });
      }
      return (
         <>
            <Input
               onUpdateValue={handleFormChange.bind(this, 'cpf')}
               value={formPT2.cpf}
               //isInvalid={cpfIsInvalid}
               inputConfig={{
                  placeholder: 'CPF',
                  keyboardType: 'numeric',
               }}
               inputContainer={styles.inputContainer}
            />
            <Input
               onUpdateValue={handleFormChange.bind(this, 'rg')}
               value={formPT2.rg}
               //isInvalid={rgIsInvalid}
               inputConfig={{
                  placeholder: 'RG',
                  keyboardType: 'numeric',
               }}
               inputContainer={styles.inputContainer}
            />
            <Input
               onUpdateValue={handleFormChange.bind(this, 'cellphone')}
               value={formPT2.cellphone}
               //isInvalid={cellphoneIsInvalid}
               inputConfig={{
                  placeholder: 'Celular',
                  keyboardType: 'numeric',
               }}
               inputContainer={styles.inputContainer}
            />
            <Input
               onUpdateValue={handleFormChange.bind(this, 'telephone')}
               value={formPT2.telephone}
               //isInvalid={telephoneIsInvalid}
               inputConfig={{
                  placeholder: 'Telefone Fixo',
                  keyboardType: 'numeric',
               }}
               inputContainer={styles.inputContainer}
            />
            <View style={styles.button}>
               <Button onPress={submitHandler}>Próximo</Button>
            </View>
         </>
      );
   }

   return (
      <>
         {!isFilled && <SignUpFormPT1 onSubmit={onSubmit} />}
         {isFilled && <SignUpFormPT2 onSubmit={onSubmit} />}
      </>
   );
};

export default SignUpForm;

const styles = StyleSheet.create({
   inputContainer: {
      marginTop: 18,
   },
   button: {
      marginTop: 50,
   },
});
