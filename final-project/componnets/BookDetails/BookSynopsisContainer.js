import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import TextToggle from '../UI/TextToggle';
import { Colors } from '../../constants/styles';

const BookSynopsisContainer = ({ synopsisText }) => {
   return (
      <View style={styles.bookSynopsis}>
         <Text style={styles.titleSynopsis}>Sinopse</Text>

         <TextToggle textStyle={styles.textSynopsis} text={synopsisText} />
      </View>
   );
};

export default BookSynopsisContainer;

const styles = StyleSheet.create({
   titleSynopsis: {
      fontFamily: 'lato-regular',
      color: Colors.silver400,
      fontSize: 16,
   },
   textSynopsis: {
      fontFamily: 'lato-regular',
      color: Colors.silver300,
      marginTop: 15,
      textAlign: 'justify',
   },
   bookSynopsis: {
      marginTop: 30,
      marginHorizontal: 30,
   },
});
