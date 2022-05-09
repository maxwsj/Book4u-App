import { StyleSheet, Text, View, Pressable } from 'react-native';
import React from 'react';

import BookLogo from './BookLogo';
import { Colors } from '../../constants/styles';

const LogoButton = ({ onPress }) => {
   return (
      <Pressable
         onPress={onPress}
         style={({ pressed }) => [styles.button, pressed && styles.pressed]}
      >
         <View style={styles.container}>
            {/* <BookLogo width={30} height={40} /> */}
            <BookLogo logoSize={styles.logoSize} />
            <Text style={styles.text}>BOOK4U</Text>
         </View>
      </Pressable>
   );
};

export default LogoButton;

const styles = StyleSheet.create({
   container: {
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
   },
   text: {
      textAlign: 'center',
      fontSize: 24,
      letterSpacing: 5,
      color: Colors.snow,
      fontFamily: 'lato-light',
      marginLeft: 10,
   },
   pressed: {
      opacity: 0.7,
   },
   logoSize: {
      width: 32,
      height: 32,
   },
});
