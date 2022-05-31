import {
   StyleSheet,
   View,
   Pressable,
   Image,
   Text,
   Dimensions,
} from 'react-native';
import React from 'react';

import { Colors } from '../../constants/styles';

const { width } = Dimensions.get('window');

const BookVerticalItem = ({ title, imageUrl, onPress }) => {
   return (
      <Pressable
         onPress={onPress}
         style={({ pressed }) => [styles.button, pressed && styles.pressed]}
      >
         <View style={styles.container}>
            <View style={styles.imageContainer}>
               <Image
                  style={styles.bookImage}
                  source={{
                     uri: imageUrl,
                  }}
               />
            </View>
            <View style={styles.textWrapper}>
               <Text style={styles.textItem}>{title}</Text>
            </View>
         </View>
      </Pressable>
   );
};

export default BookVerticalItem;

const styles = StyleSheet.create({
   container: {
      marginTop: 15,
      justifyContent: 'center',
      alignItems: 'center',
   },
   imageContainer: {
      width: width * 0.7,
      height: width / 1,
      marginHorizontal: 10,
      elevation: 6,
      borderRadius: 5,
      backgroundColor: Colors.snow,
   },
   bookImage: {
      width: '100%',
      height: '100%',
      borderRadius: 5,
   },
   pressed: {
      opacity: 0.7,
   },
   textWrapper: {
      justifyContent: 'center',
      alignItems: 'center',
      width: width * 0.7,
      marginTop: 5,
   },
   textItem: {
      textAlign: 'center',
      fontFamily: 'poppins-regular',
      fontSize: 16,
      color: Colors.silver400,
   },
});
