import { StyleSheet, Text, View, Pressable, Image } from 'react-native';
import React from 'react';
import { Colors } from '../../constants/styles';

const LogoButton = ({ onPress, textColor }) => {
   return (
      <Pressable
         onPress={onPress}
         style={({ pressed }) => [styles.button, pressed && styles.pressed]}
      >
         <View style={styles.container}>
            {/* <BookLogo width={30} height={40} /> */}
            <View style={styles.imageContainer}>
               <Image
                  style={styles.image}
                  source={require('../../assets/img/books-white.png')}
               />
            </View>
            <Text style={[styles.text, textColor]}>BOOK4U</Text>
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
   imageContainer: {
      width: 36,
      height: 36,
   },
   image: {
      width: '100%',
      height: '100%',
   },
});
