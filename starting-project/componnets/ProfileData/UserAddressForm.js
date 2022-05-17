import { StyleSheet, View } from 'react-native';
import React from 'react';
import { Colors } from '../../constants/styles';
import InputIcon from '../UI/InputIcon';
import Button from '../UI/Button';
import IconBtn from '../UI/IconBtn';

const UserAddressForm = ({ onClose }) => {
   function confirmHandler() {
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
            // onUpdateValue={updateInputValueHandler.bind(this, 'username')}
            // value={enteredUsername}
            // isInvalid={usernameIsInvalid}
            bgStyle={styles.inputBgColor}
            inputConfig={{
               placeholder: 'CEP',
               autoCapitalize: 'none',
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
            // onUpdateValue={updateInputValueHandler.bind(this, 'username')}
            // value={enteredUsername}
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
            // onUpdateValue={updateInputValueHandler.bind(this, 'username')}
            // value={enteredUsername}
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
            // onUpdateValue={updateInputValueHandler.bind(this, 'username')}
            // value={enteredUsername}
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
            <Button onPress={confirmHandler}>Confirmar</Button>
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
