import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Colors } from '../../../constants/styles';

const PaymentNotification = ({ text }) => {
   return (
      <View style={styles.container}>
         <Text style={styles.text}>{text}</Text>
      </View>
   );
};

export default PaymentNotification;

const styles = StyleSheet.create({
   container: {
      backgroundColor: Colors.silver50,
      elevation: 6,
      padding: 12,
      borderRadius: 6,
      marginVertical: 24,
   },
   text: {
      color: Colors.tertiary,
      fontFamily: 'lato-bold',
      textAlign: 'center',
   },
});
