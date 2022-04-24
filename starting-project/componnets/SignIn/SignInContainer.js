import { StyleSheet, View } from 'react-native';
import React from 'react';

import { Colors } from '../../constants/styles';
import InputIcon from '../UI/InputIcon';

const SignInContainer = () => {
   return (
      <View style={styles.loginFormContainer}>
         <View>
            <InputIcon
               inputConfig={{
                  placeholder: 'Usuário',
                  keyboardType: 'email-address',
               }}
               iconConfig={{
                  name: 'person-outline',
                  size: 20,
                  color: Colors.silver200,
               }}
            />
         </View>
         <View style={styles.inputItem}>
            <InputIcon
               inputConfig={{
                  placeholder: 'Senha',
                  secureTextEntry: true,
               }}
               iconConfig={{
                  name: 'md-lock-closed-outline',
                  size: 20,
                  color: Colors.silver200,
               }}
            />
         </View>
      </View>
   );
};

export default SignInContainer;

const styles = StyleSheet.create({
   loginFormContainer: {
      marginHorizontal: 22,
   },
   inputItem: {
      marginTop: 16,
   },
});
