import { StyleSheet, View, TextInput } from 'react-native';
import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import InvalidInputTxt from './InvalidInputTxt';
import IconBtn from './IconBtn';

import { Colors } from '../../constants/styles';

const Input = ({
   inputConfig,
   iconConfig,
   isInvalid,
   onUpdateValue,
   children,
   InvalidInputTxtStyle,
   setIcon,
   iconBtnConfig,
   onIconBtnPress,
}) => {
   return (
      <>
         <View style={[styles.searchSection, isInvalid && styles.inputInvalid]}>
            <Ionicons style={styles.searchIcon} {...iconConfig} />
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
         <View style={InvalidInputTxtStyle}>
            {isInvalid && <InvalidInputTxt>{children}</InvalidInputTxt>}
         </View>
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
   },
   searchIcon: {
      padding: 10,
   },
   input: {
      flex: 1,
      paddingTop: 10,
      paddingRight: 10,
      paddingBottom: 10,
      paddingLeft: 0,
      backgroundColor: Colors.white,
      fontSize: 16,
      color: Colors.silver400,
   },
   inputInvalid: {
      backgroundColor: Colors.papayaWhip,
      borderRadius: 5,
      overflow: 'hidden',
   },
});
