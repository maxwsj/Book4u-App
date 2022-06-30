import { StyleSheet, Text, View } from 'react-native';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import BookImage from '../../../componnets/UI/BookImage';
import { Colors } from '../../../constants/styles';

const HistoryDetailItem = ({ route }) => {
   const { exchangeType } = route.params;

   const filteredHistory = useSelector((state) => state.user.filteredHistory);
   return (
      <View style={styles.container}>
         <View style={styles.textInformation}>
            <View style={[styles.textItem, styles.itemMargin]}>
               <Text style={styles.title}>Solicitante</Text>
               <Text style={styles.text}>
                  {filteredHistory.requester.firstName}
               </Text>
               <Text style={[styles.title, styles.titleMargin]}>Data</Text>
               <Text style={styles.text}>{filteredHistory.exchangeDate}</Text>
            </View>
            <View style={styles.textItem}>
               <Text style={styles.title}>Trocado por</Text>
               <Text style={styles.text}>
                  {filteredHistory.type == 'BOOK' ? 'Livro' : 'Ponto'}
               </Text>
               <Text style={[styles.title, styles.titleMargin]}>Endereço</Text>
               <Text
                  style={styles.text}
               >{`${filteredHistory.requester.zipCode}, ${filteredHistory.requester.state} - ${filteredHistory.requester.city}`}</Text>
               <Text style={styles.text}>
                  {`${filteredHistory.requester.district}, ${filteredHistory.requester.streetName} ${filteredHistory.requester.houseNumber}`}
               </Text>
            </View>
         </View>
         <Text style={styles.exchanType}>Ofertado</Text>
         <BookImage
            bookName={filteredHistory.offered.name}
            bookPrice={filteredHistory.offered.price}
            bookAuthor={filteredHistory.offered.author.name}
            image={filteredHistory.offered.images.frontSideImage}
         />
         <Text style={styles.exchanType}>Recebido</Text>
         <BookImage
            bookName={filteredHistory.received.name}
            bookPrice={filteredHistory.received.price}
            bookAuthor={filteredHistory.received.author.name}
            image={filteredHistory.received.images.frontSideImage}
         />
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
