import { StyleSheet, View } from 'react-native';
import { useState } from 'react';
import { Colors } from '../../constants/styles';
import InputIcon from '../UI/InputIcon';
import Button from '../UI/Button';
import IconBtn from '../UI/IconBtn';

const CellphoneForm = ({ onSubmit, onClose }) => {
   const [formData, setFormData] = useState({
      cellphone: '',
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
         cellphone: formData.cellphone,
      });
      onClose();
   }

   return (
      <View style={styles.addressContainer}>
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
            onUpdateValue={updateInputValueHandler.bind(this, 'cellphone')}
            value={formData.complemento}
            // isInvalid={usernameIsInvalid}
            inputContainer={styles.inputContainer}
            bgStyle={styles.inputBgColor}
            inputConfig={{
               placeholder: 'Celular',
               keyboardType: 'numeric',
               maxLength: 11,
            }}
            iconConfig={{
               name: 'phone-portrait-outline',
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

export default CellphoneForm;

const styles = StyleSheet.create({
   addressContainer: {
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
