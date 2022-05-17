import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

import FlatButton from './FlatButton';
import { Colors } from '../../constants/styles';

const HorizontalButton = ({
   hrColor,
   btnTitle,
   btnText,
   hrContainer,
   onPress,
   btnHrColor,
}) => {
   return (
      <View style={[styles.signInContainer, hrContainer]}>
         <View style={[styles.signInTextWrapper, hrColor]}>
            <Text style={styles.signInText}>{btnTitle}</Text>
         </View>
         <View style={[styles.signInButtonWrapper, btnHrColor]}>
            <FlatButton onPress={onPress}>{btnText}</FlatButton>
         </View>
      </View>
   );
};

export default HorizontalButton;

const styles = StyleSheet.create({
   signInContainer: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      marginTop: 20,
   },
   signInTextWrapper: {
      borderBottomWidth: 5,
      flex: 1,
   },
   signInText: {
      textAlign: 'center',
      color: Colors.silver300,
      fontFamily: 'poppins-regular',
      fontSize: 14,
   },
   signInButtonWrapper: {
      borderBottomColor: Colors.silver100,
      borderBottomWidth: 2,
      flex: 1,
   },
});
