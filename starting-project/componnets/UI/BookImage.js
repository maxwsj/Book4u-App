import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import { Colors } from '../../constants/styles';

const BookImage = () => {
   return (
      <View style={styles.imageItem}>
         <View style={styles.imageContainer}>
            <Image style={styles.image} />
         </View>
         <View style={styles.textContainer}>
            <Text style={styles.bookTitle}>How innovation works</Text>
            <Text style={styles.bookAuthor}>Matt Ridley</Text>
            <Text style={styles.bookPrice}>Pontos: 30</Text>
         </View>
      </View>
   );
};

export default BookImage;

const styles = StyleSheet.create({
   imageContainer: {
      width: 120,
      height: 150,
   },
   imageItem: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginVertical: 20,
   },
   image: {
      width: '100%',
      height: '100%',
      backgroundColor: Colors.darkCyan,
      borderRadius: 5,
   },
   bookTitle: {
      fontFamily: 'lato-regular',
      color: Colors.silver300,
      fontSize: 16,
   },
   bookAuthor: {
      fontFamily: 'lato-regular',
      color: Colors.silver300,
      fontSize: 12,
      marginTop: 5,
   },
   bookPrice: {
      fontFamily: 'lato-regular',
      color: Colors.secondary,
      fontSize: 20,
      marginTop: 12,
   },
   textContainer: {
      justifyContent: 'center',
      alignItems: 'flex-start',
   },
});
