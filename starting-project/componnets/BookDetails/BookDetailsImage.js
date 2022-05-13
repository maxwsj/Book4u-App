import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';
import React from 'react';
const { width, height } = Dimensions.get('window');

import { Colors } from '../../constants/styles';

const BookDetailsImage = ({ imageUrl }) => {
   return (
      <View style={styles.container}>
         <View style={styles.imageContainer}>
            <Image
               style={styles.bookImage}
               source={{
                  uri: imageUrl,
               }}
            />
         </View>
      </View>
   );
};

export default BookDetailsImage;

const styles = StyleSheet.create({
   container: {
      marginTop: 15,
   },
   imageContainer: {
      width: width * 0.65 - 40,
      height: width * 0.8,
      marginHorizontal: 40,
      elevation: 6,
      borderRadius: 5,
      backgroundColor: Colors.snow,
      marginBottom: width * 0.8,
   },
   bookImage: {
      width: '100%',
      height: '100%',
      borderRadius: 5,
   },
});
