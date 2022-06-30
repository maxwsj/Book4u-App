import { StyleSheet, View, TextInput } from 'react-native';
import { forwardRef } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import InvalidInputTxt from './InvalidInputTxt';
import IconBtn from './IconBtn';

import { Colors } from '../../constants/styles';

const Input = forwardRef((props, ref) => {
   const {
      inputConfig,
      iconConfig,
      isInvalid,
      onUpdateValue,
      children,
      InvalidInputTxtStyle,
      setIcon,
      iconBtnConfig,
      onIconBtnPress,
      iconBtnStyle,
      bgStyle,
      inputContainer,
      onSubmit,
      refValue,
   } = props;
   return (
      <>
         <View
            style={[
               styles.searchSection,
               bgStyle,
               inputContainer,
               isInvalid && styles.inputInvalid,
            ]}
         >
            <Ionicons style={styles.searchIcon} {...iconConfig} />
            <TextInput
               style={[styles.input, bgStyle, isInvalid && styles.inputInvalid]}
               {...inputConfig}
               onChangeText={onUpdateValue}
               onSubmitEditing={onSubmit}
               ref={refValue}
            />
            {setIcon && (
               <IconBtn
                  onPress={onIconBtnPress}
                  iconBtnConfig={iconBtnConfig}
                  iconBtnStyle={iconBtnStyle}
               />
            )}
         </View>
         <View style={InvalidInputTxtStyle}>
            {isInvalid && <InvalidInputTxt>{children}</InvalidInputTxt>}
         </View>
      </>
   );
});

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
      paddingBottom: 5,
      paddingLeft: 0,
      backgroundColor: Colors.white,
      fontSize: 14,
      color: Colors.silver400,
      fontFamily: 'poppins-regular',
   },
   inputInvalid: {
      backgroundColor: Colors.papayaWhip,
      borderRadius: 5,
      overflow: 'hidden',
   },
});
