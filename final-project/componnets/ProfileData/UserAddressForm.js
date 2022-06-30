import { StyleSheet, View } from 'react-native';
import { useState } from 'react';
import { Colors } from '../../constants/styles';
import InputIcon from '../UI/InputIcon';
import Button from '../UI/Button';
import IconBtn from '../UI/IconBtn';

const UserAddressForm = ({ onClose, onSubmit }) => {
   const [formData, setFormData] = useState({
      zipCode: '',
      streetName: '',
      district: '',
      houseNumber: '',
      complement: '',
      city: '',
      state: '',
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
         zipCode: formData.zipCode,
         district: formData.district,
         streetName: formData.streetName,
         houseNumber: formData.houseNumber,
         complement: formData.complement,
         city: formData.city,
         state: formData.state,
      });
      onClose();
   }

   return (
      <>
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
            onUpdateValue={updateInputValueHandler.bind(this, 'zipCode')}
            value={formData.zipCode}
            // isInvalid={usernameIsInvalid}
            bgStyle={styles.inputBgColor}
            inputConfig={{
               placeholder: 'CEP',
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
            onUpdateValue={updateInputValueHandler.bind(this, 'state')}
            value={formData.state}
            // isInvalid={usernameIsInvalid}
            inputContainer={styles.inputContainer}
            bgStyle={styles.inputBgColor}
            inputConfig={{
               placeholder: 'Estado',
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
            onUpdateValue={updateInputValueHandler.bind(this, 'city')}
            value={formData.state}
            // isInvalid={usernameIsInvalid}
            inputContainer={styles.inputContainer}
            bgStyle={styles.inputBgColor}
            inputConfig={{
               placeholder: 'Cidade',
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
            onUpdateValue={updateInputValueHandler.bind(this, 'district')}
            value={formData.district}
            // isInvalid={usernameIsInvalid}
            inputContainer={styles.inputContainer}
            bgStyle={styles.inputBgColor}
            inputConfig={{
               placeholder: 'Bairro',
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
            onUpdateValue={updateInputValueHandler.bind(this, 'streetName')}
            value={formData.streetName}
            // isInvalid={usernameIsInvalid}
            inputContainer={styles.inputContainer}
            bgStyle={styles.inputBgColor}
            inputConfig={{
               placeholder: 'Endereço',
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
            onUpdateValue={updateInputValueHandler.bind(this, 'houseNumber')}
            value={formData.houseNumber}
            // isInvalid={usernameIsInvalid}
            inputContainer={styles.inputContainer}
            bgStyle={styles.inputBgColor}
            inputConfig={{
               placeholder: 'Número',
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
            onUpdateValue={updateInputValueHandler.bind(this, 'complement')}
            value={formData.complement}
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
      </>
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
   modalWidth: {
      marginTop: 30,
   },
});
