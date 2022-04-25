import { StyleSheet, View, TextInput } from 'react-native';
import React from 'react';

import { Colors } from '../../constants/styles';

const Input = ({ inputConfig, inputContainer, isInvalid, onUpdateValue }) => {
   return (
      <View style={[styles.searchSection, inputContainer]}>
         <TextInput
            style={[styles.input, isInvalid && styles.inputInvalid]}
            {...inputConfig}
            onChangeText={onUpdateValue}
         />
      </View>
   );
};

export default Input;

const styles = StyleSheet.create({
   searchSection: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: Colors.white,
      borderBottomColor: Colors.silver100,
      borderBottomWidth: 2,
   },
   input: {
      flex: 1,
      paddingTop: 10,
      paddingRight: 10,
      paddingBottom: 6,
      paddingLeft: 0,
      backgroundColor: Colors.white,
      fontSize: 16,
      color: Colors.silver400,
   },
   inputInvalid: {
      backgroundColor: Colors.error100,
   },
});
