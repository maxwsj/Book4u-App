import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Colors } from '../../constants/styles';

const BookSelectInformation = ({ text }) => {
   return (
      <View style={styles.container}>
         <Text style={styles.title}>{text}</Text>
      </View>
   );
};

export default BookSelectInformation;

const styles = StyleSheet.create({
   container: {
      marginVertical: 15,
      backgroundColor: Colors.silver50,
      elevation: 4,
      paddingVertical: 100,
      justifyContent: 'center',
      alignItems: 'center',
   },
   title: {
      fontFamily: 'lato-bold',
      color: Colors.dimgray,
      fontSize: 16,
      textAlign: 'center',
   },
});
