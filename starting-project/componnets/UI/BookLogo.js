import { StyleSheet, Image, View } from 'react-native';
import React from 'react';

const BookLogo = ({ logoSize }) => {
   return (
      <View style={[styles.imageContainer, logoSize]}>
         <Image
            style={styles.image}
            source={require('../../assets/img/books.png')}
         />
      </View>
   );
};

export default BookLogo;

const styles = StyleSheet.create({
   imageContainer: {
      width: 36,
      height: 36,
   },
   image: {
      width: '100%',
      height: '100%',
   },
});
