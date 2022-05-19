import { StyleSheet, View } from 'react-native';
import { useState } from 'react';
import { Colors } from '../../constants/styles';
import InputIcon from '../UI/InputIcon';
import Button from '../UI/Button';
import IconBtn from '../UI/IconBtn';

const UserAddressForm = ({ onClose, onSubmit }) => {
   const [formData, setFormData] = useState({
      CEP: '',
      bairro: '',
      numero: '',
      complemento: '',
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
         CEP: formData.CEP,
         bairro: formData.bairro,
         numero: formData.numero,
         complemento: formData.complemento,
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
            onUpdateValue={updateInputValueHandler.bind(this, 'CEP')}
            value={formData.CEP}
            // isInvalid={usernameIsInvalid}
            bgStyle={styles.inputBgColor}
            inputConfig={{
               placeholder: 'CEP',
               autoCapitalize: 'none',
               keyboardType: 'numeric',
               maxLength: 9,
            }}
            iconConfig={{
               name: 'location-outline',
               size: 20,
               color: Colors.silver200,
            }}
            // children='* Dados incorretos'
            // InvalidInputTxtStyle={styles.InvalidInputMargin}
         />
         <InputIcon
            onUpdateValue={updateInputValueHandler.bind(this, 'bairro')}
            value={formData.bairro}
            // isInvalid={usernameIsInvalid}
            inputContainer={styles.inputContainer}
            bgStyle={styles.inputBgColor}
            inputConfig={{
               placeholder: 'Bairro',
               autoCapitalize: 'none',
            }}
            iconConfig={{
               name: 'map-outline',
               size: 20,
               color: Colors.silver200,
            }}
            // children='* Dados incorretos'
            // InvalidInputTxtStyle={styles.InvalidInputMargin}
         />
         <InputIcon
            onUpdateValue={updateInputValueHandler.bind(this, 'numero')}
            value={formData.numero}
            // isInvalid={usernameIsInvalid}
            inputContainer={styles.inputContainer}
            bgStyle={styles.inputBgColor}
            inputConfig={{
               placeholder: 'Número',
               autoCapitalize: 'none',
            }}
            iconConfig={{
               name: 'navigate-outline',
               size: 20,
               color: Colors.silver200,
            }}
            // children='* Dados incorretos'
            // InvalidInputTxtStyle={styles.InvalidInputMargin}
         />
         <InputIcon
            onUpdateValue={updateInputValueHandler.bind(this, 'complemento')}
            value={formData.complemento}
            // isInvalid={usernameIsInvalid}
            inputContainer={styles.inputContainer}
            bgStyle={styles.inputBgColor}
            inputConfig={{
               placeholder: 'Complemento',
               autoCapitalize: 'none',
            }}
            iconConfig={{
               name: 'home-outline',
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

export default UserAddressForm;

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
