import { StyleSheet, ScrollView } from 'react-native';
import SignUpFormData from './SignUpFormData';

const SignUpForm = ({ onSubmit, formPT1IsInvalid, isValidated }) => {
   return (
      <>
         {!isValidated && (
            <SignUpFormPT1
               onSubmit={onSubmit}
               formPT1IsInvalid={formPT1IsInvalid}
            />
         )}
         {isValidated && <SignUpFormPT2 onSubmit={onSubmit} />}
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
