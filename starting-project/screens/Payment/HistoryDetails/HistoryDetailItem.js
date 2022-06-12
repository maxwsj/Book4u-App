import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import BookImage from '../../../componnets/UI/BookImage';
import { Colors } from '../../../constants/styles';
const HistoryDetailItem = () => {
   return (
      <View style={styles.container}>
         <View style={styles.textInformation}>
            <View style={[styles.textItem, styles.itemMargin]}>
               <Text style={styles.title}>Solicitante</Text>
               <Text style={styles.text}>Aragon Swifte</Text>
               <Text style={[styles.title, styles.titleMargin]}>Data</Text>
               <Text style={styles.text}>20 de Agosto de 2022</Text>
            </View>
            <View style={styles.textItem}>
               <Text style={styles.title}>Trocado por</Text>
               <Text style={styles.text}>Livro</Text>
               <Text style={[styles.title, styles.titleMargin]}>Endereço</Text>
               <Text style={styles.text}>Rua pereira silva</Text>
               <Text style={styles.text}>
                  Joao sérgio alves, Margarida, 990
               </Text>
            </View>
         </View>
         <Text style={styles.exchanType}>Ofertado</Text>
         <BookImage />
         <Text style={styles.exchanType}>Recebido</Text>
         <BookImage />
      </View>
   );
};

export default HistoryDetailItem;

const styles = StyleSheet.create({
   container: {
      backgroundColor: Colors.silver50,
      marginHorizontal: 30,
      elevation: 5,
      borderRadius: 6,
   },
   title: {
      fontFamily: 'lato-bold',
      fontSize: 16,
      color: Colors.dimgray,
   },
   titleMargin: {
      marginTop: 20,
   },
   text: {
      fontFamily: 'lato-regular',
      color: Colors.silver400,
      marginTop: 8,
   },
   textInformation: {
      flexDirection: 'row',
      alignItems: 'baseline',
      marginHorizontal: 30,
      marginTop: 30,
   },
   textItem: {
      width: 0,
      flexGrow: 1,
   },
   itemMargin: {
      marginRight: 50,
   },
   exchanType: {
      marginHorizontal: 30,
      fontSize: 16,
      fontFamily: 'lato-bold',
      color: Colors.dimgray,
   },
});
