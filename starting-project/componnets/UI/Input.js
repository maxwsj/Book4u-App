import { StyleSheet, View, TextInput, Text } from 'react-native';
import React from 'react';

import { Colors } from '../../constants/styles';
import InvalidInputTxt from './InvalidInputTxt';

const Input = ({
   inputConfig,
   inputContainer,
   isInvalid,
   onUpdateValue,
   children,
}) => {
   return (
      <>
         <View style={[styles.searchSection, inputContainer]}>
            <TextInput
               style={[styles.input, isInvalid && styles.inputInvalid]}
               {...inputConfig}
               onChangeText={onUpdateValue}
            />
         </View>
         {isInvalid && <InvalidInputTxt>{children}</InvalidInputTxt>}
      </>
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
      marginHorizontal: 30,
   },
   input: {
      flex: 1,
      paddingTop: 10,
      paddingRight: 10,
      paddingBottom: 6,
      paddingLeft: 5,
      backgroundColor: Colors.white,
      fontSize: 16,
      color: Colors.silver400,
   },
   inputInvalid: {
      backgroundColor: Colors.papayaWhip,
      borderTopLeftRadius: 5,
      borderTopRightRadius: 5,
      overflow: 'hidden',
   },
});
