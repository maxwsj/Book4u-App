import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

import BookLogo from '../../assets/img/book2-logo.svg';
import { Colors } from '../../constants/styles';

const Logo = () => {
   return (
      <View style={styles.container}>
         <BookLogo width={60} height={40} />
         <Text style={styles.text}>BOOK4U</Text>
      </View>
   );
};

export default Logo;

const styles = StyleSheet.create({
   container: {
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      borderBottomColor: Colors.lavenderBlush,
      borderBottomWidth: 1,
      marginHorizontal: 30,
      paddingVertical: 8,
   },
   text: {
      textAlign: 'center',
      fontSize: 32,
      letterSpacing: 5,
      color: Colors.silver300,
   },
});
