import { StyleSheet, View } from 'react-native';
import { useState } from 'react';
import { Colors } from '../../constants/styles';
import InputIcon from '../UI/InputIcon';
import Button from '../UI/Button';
import IconBtn from '../UI/IconBtn';

const TelephoneForm = ({ onSubmit, onClose }) => {
   const [formData, setFormData] = useState({
      telephone: '',
   });

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
         telephone: formData.telephone,
      });
      onClose();
   }

   return (
      <View style={styles.formContainer}>
         <View style={{ alignItems: 'flex-end' }}>
            <IconBtn
               onPress={onClose}
               iconBtnConfig={{
                  name: 'close-outline',
                  size: 24,
                  color: Colors.silver200,
               }}
               // iconBtnStyle={iconBtnStyle}
            />
         </View>
         <InputIcon
            onUpdateValue={updateInputValueHandler.bind(this, 'telephone')}
            value={formData.complemento}
            // isInvalid={usernameIsInvalid}
            inputContainer={styles.inputContainer}
            bgStyle={styles.inputBgColor}
            inputConfig={{
               placeholder: 'Telefone',
               keyboardType: 'numeric',
               maxLength: 10,
            }}
            iconConfig={{
               name: 'call-outline',
               size: 20,
               color: Colors.silver200,
            }}
            // children='* Dados incorretos'
            // InvalidInputTxtStyle={styles.InvalidInputMargin}
         />
         <View style={styles.buttonWrapper}>
            <Button onPress={submitHandler}>Confirmar</Button>
         </View>
      </View>
   );
};

export default TelephoneForm;

const styles = StyleSheet.create({
   formContainer: {
      marginBottom: 20,
   },
   inputBgColor: {
      backgroundColor: Colors.snow,
   },
   buttonWrapper: {
      marginTop: 30,
   },
   inputContainer: {
      marginTop: 15,
   },
});
