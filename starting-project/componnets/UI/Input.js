import { StyleSheet, View, TextInput, Text } from 'react-native';
import React from 'react';

import { Colors } from '../../constants/styles';
import InvalidInputTxt from './InvalidInputTxt';
import IconBtn from '../UI/IconBtn';

const Input = ({
   inputConfig,
   inputContainer,
   isInvalid,
   onUpdateValue,
   children,
   setIcon,
   onIconBtnPress,
   iconBtnConfig,
}) => {
   return (
      <>
         <View style={[styles.searchSection, inputContainer]}>
            <TextInput
               style={[styles.input, isInvalid && styles.inputInvalid]}
               {...inputConfig}
               onChangeText={onUpdateValue}
            />
            {setIcon && (
               <IconBtn
                  onPress={onIconBtnPress}
                  iconBtnConfig={iconBtnConfig}
               />
            )}
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
      paddingBottom: 3,
      paddingLeft: 5,
      backgroundColor: Colors.white,
      fontSize: 14,
      color: Colors.silver400,
      fontFamily: 'poppins-regular',
   },
   inputInvalid: {
      backgroundColor: Colors.papayaWhip,
      borderTopLeftRadius: 5,
      borderTopRightRadius: 5,
      overflow: 'hidden',
   },
});
