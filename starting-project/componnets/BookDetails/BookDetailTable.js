import { StyleSheet, Text, View } from 'react-native';
import { Divider } from 'react-native-paper';
import React from 'react';

import { Colors } from '../../constants/styles';

const BookDetailTable = ({ detailTitle, title, setDivider, detailStyles }) => {
   return (
      <>
         <View style={[styles.detailItems, detailStyles]}>
            <View style={styles.detailTitleWrapper}>
               <Text style={styles.detailItemTitle}>{detailTitle}</Text>
            </View>
            <Divider style={styles.dividerVertical} />
            <View style={styles.detailTextWrapper}>
               <Text style={styles.detailText}>{title}</Text>
            </View>
         </View>
         {setDivider && <Divider style={styles.dividerPaper} />}
      </>
   );
};

export default BookDetailTable;

const styles = StyleSheet.create({
   detailItems: {
      justifyContent: 'space-evenly',
      alignItems: 'center',
      flexDirection: 'row',
      marginTop: 14,
   },

   detailTitleWrapper: {
      width: 60,
   },

   detailTextWrapper: {
      width: 100,
   },

   detailItemTitle: {
      fontFamily: 'lato-bold',
      color: Colors.silver400,
      fontSize: 14,
      textAlign: 'center',
   },

   detailText: {
      fontFamily: 'lato-regular',
      color: Colors.silver300,
      fontSize: 14,
      textAlign: 'center',
   },

   dividerPaper: {
      height: 1,
      marginHorizontal: 15,
      marginVertical: 24,
      backgroundColor: Colors.silver200,
   },

   dividerVertical: {
      width: 1,
      height: 30,
      backgroundColor: Colors.silver400,
   },
});
