import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Colors } from '../../constants/styles';
import { Divider } from 'react-native-paper';

const BookInfoContainer = ({ bookData }) => {
   return (
      <View style={styles.bookInfoContainer}>
         <View style={styles.bookInfoItems}>
            <View>
               <Text>Número de Páginas</Text>
            </View>
            <View>
               <Text>{bookData.pagesQuantity}</Text>
            </View>
         </View>
         <Divider style={styles.dividerPaper} />
         <View style={[styles.bookInfoItems, styles.languageInfo]}>
            <View>
               <Text>Idioma</Text>
            </View>
            <View>
               <Text>{bookData.language}</Text>
            </View>
         </View>
      </View>
   );
};

export default BookInfoContainer;

const styles = StyleSheet.create({
   bookInfoContainer: {
      justifyContent: 'space-around',
      alignItems: 'center',
      flexDirection: 'row',
      marginTop: 30,
      marginHorizontal: 30,
      backgroundColor: Colors.silver50,
      borderRadius: 5,
      height: 60,
      elevation: 4,
   },
   bookInfoItems: {
      justifyContent: 'center',
      alignItems: 'center',
   },
   dividerPaper: {
      width: 1,
      height: '70%',
      backgroundColor: Colors.silver200,
      right: '12%',
   },
   languageInfo: {
      right: '10%',
   },
});
