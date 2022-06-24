import { StyleSheet, Text, View } from 'react-native';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import BookImage from '../../../componnets/UI/BookImage';
import { Colors } from '../../../constants/styles';

const CreditHistoryDetail = ({ route }) => {
   const { exchangeType } = route.params;

   const creditHistory = useSelector(
      (state) => state.user.filtereCreditdHistory
   );
   return (
      <View style={styles.container}>
         <View style={styles.textInformation}>
            <View style={[styles.textItem, styles.itemMargin]}>
               <Text style={styles.title}>Solicitante</Text>
               <Text style={styles.text}>
                  {creditHistory.requester.firstName}
               </Text>
               <Text style={[styles.title, styles.titleMargin]}>Data</Text>
               <Text style={styles.text}>{creditHistory.exchangeDate}</Text>
            </View>
            <View style={styles.textItem}>
               <Text style={styles.title}>Trocado por</Text>
               <Text style={styles.text}>
                  {creditHistory.type == 'BOOK' ? 'Livro' : 'Ponto'}
               </Text>
               <Text style={[styles.title, styles.titleMargin]}>Endereço</Text>
               <Text
                  style={styles.text}
               >{`${creditHistory.requester.zipCode}, ${creditHistory.requester.state} - ${creditHistory.requester.city}`}</Text>
               <Text style={styles.text}>
                  {`${creditHistory.requester.district}, ${creditHistory.requester.streetName} ${creditHistory.requester.houseNumber}`}
               </Text>
            </View>
         </View>
         <Text style={styles.exchanType}>Ofertado</Text>
         <BookImage
            bookName={creditHistory.offered.name}
            bookPrice={creditHistory.offered.price}
            bookAuthor={creditHistory.offered.author.name}
            image={creditHistory.offered.images.frontSideImage}
         />
         <Text style={styles.exchanType}>Recebido</Text>
         <View style={styles.creditContainer}>
            <Text style={styles.creditTitle}>Créditos Recebidos:</Text>
            <Text style={styles.creditText}>{creditHistory.received}</Text>
         </View>
      </View>
   );
};

export default CreditHistoryDetail;

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
   creditContainer: {
      marginHorizontal: 30,
      marginVertical: 15,
      flexDirection: 'row',
      alignItems: 'center',
   },
   creditText: {
      color: Colors.secondary,
      marginLeft: 6,
      fontSize: 18,
      textAlign: 'center',
   },
   creditTitle: {
      fontFamily: 'lato-regular',
      color: Colors.dimgray,
   },
});
