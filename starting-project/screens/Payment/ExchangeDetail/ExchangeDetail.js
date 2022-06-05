import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { useState, useEffect } from 'react';
import { Colors } from '../../../constants/styles';
import { BOOK_DATA } from '../../../data/dummy-data';
import Button from '../../../componnets/UI/Button';
const ExchangeDetail = ({ route, navigation }) => {
   const { externalBookId, userBookId, userOption } = route.params;
   const [userOfferedBook, setUserOfferedBook] = useState({});

   const bookDetails = BOOK_DATA.filter((bookItem) => {
      return bookItem.id === externalBookId;
   });
   let userBookOffer;

   if (userOption === 'Book') {
      const userBookData = BOOK_DATA.filter((bookItem) => {
         return bookItem.id === userBookId;
      });
      userBookOffer = (
         <View style={styles.bookContainer}>
            <View style={styles.imageContainer}>
               <Image
                  style={styles.bookImage}
                  source={{ uri: userBookData[0].bookImages.frontSideImage }}
               />
            </View>
            <View style={styles.bookInfoContainer}>
               <Text style={styles.bookTitle}>{userBookData[0].name}</Text>
               <Text style={styles.bookAuthor}>
                  {userBookData[0].author.name}
               </Text>
               <Text
                  style={styles.bookPrice}
               >{`R$${userBookData[0].price}`}</Text>
            </View>
         </View>
      );
   } else {
      userBookOffer = '';
   }

   function confirmExchangeHandler() {
      navigation.navigate('SuccessfullyExchanged');
   }
   function cancelExchangeHandler() {
      navigation.navigate('CanceledExchange');
   }

   return (
      <ScrollView>
         <View style={styles.container}>
            <Text style={styles.title}>Usuário</Text>
            <View style={styles.card}>
               <Text style={styles.text}>Aragon Swift</Text>
            </View>
            <Text style={styles.title}>Endereço</Text>
            <View style={styles.card}>
               <Text style={styles.text}>
                  Rua Alphelia Josephina Simionato Moreno
               </Text>
               <Text style={[styles.text, styles.subText]}>
                  Parque Suburbano
               </Text>
            </View>
            <Text style={styles.title}>Pedido</Text>
            <View style={styles.bookContainer}>
               <View style={styles.imageContainer}>
                  <Image
                     style={styles.bookImage}
                     source={{ uri: bookDetails[0].bookImages.frontSideImage }}
                  />
               </View>
               <View style={styles.bookInfoContainer}>
                  <Text style={styles.bookTitle}>{bookDetails[0].name}</Text>
                  <Text style={styles.bookAuthor}>
                     {bookDetails[0].author.name}
                  </Text>
                  <Text
                     style={styles.bookPrice}
                  >{`R$${bookDetails[0].price}`}</Text>
               </View>
            </View>
            <Text style={styles.title}>Método de pagamento</Text>
            <View style={styles.card}>
               <Text style={styles.text}>
                  {userOption === 'Book' ? 'Livro' : 'Pontos'}
               </Text>
            </View>
            {userOption === 'Book' ? userBookOffer : null}
            <View style={styles.buttonContainer}>
               <Button
                  onPress={cancelExchangeHandler}
                  stylesBtn={styles.buttonCancel}
               >
                  Cancelar
               </Button>
               <Button
                  onPress={confirmExchangeHandler}
                  stylesBtn={styles.buttonConfirm}
               >
                  Confirmar
               </Button>
            </View>
         </View>
      </ScrollView>
   );
};

export default ExchangeDetail;

const styles = StyleSheet.create({
   container: {
      marginHorizontal: 30,
      marginTop: 15,
   },
   title: {
      fontFamily: 'lato-bold',
      fontSize: 16,
      marginTop: 20,
   },
   text: {
      fontFamily: 'lato-regular',
      color: Colors.dimgray,
   },
   subText: {
      color: Colors.silver400,
      marginTop: 12,
   },
   card: {
      backgroundColor: Colors.silver50,
      elevation: 6,
      padding: 12,
      borderRadius: 6,
      marginVertical: 24,
   },
   imageContainer: {
      width: 150,
      height: 200,
      marginVertical: 14,
   },
   bookContainer: {
      flexDirection: 'row',
   },
   bookInfoContainer: {
      marginTop: 20,
      width: 175,
      marginHorizontal: 14,
   },
   bookImage: {
      width: '100%',
      height: '100%',
      borderRadius: 5,
   },
   bookTitle: {
      color: Colors.silver400,
      fontFamily: 'lato-regular',
      fontSize: 14,
   },
   bookAuthor: {
      color: Colors.silver400,
      fontFamily: 'lato-light',
      fontSize: 12,
      marginTop: 8,
   },
   bookPrice: {
      color: Colors.secondary,
      fontFamily: 'lato-regular',
      fontSize: 18,
      marginTop: 14,
   },
   buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      marginVertical: 20,
   },
   buttonConfirm: {
      backgroundColor: Colors.darkCyan,
      paddingHorizontal: 24,
      paddingVertical: 14,
   },
   buttonCancel: {
      backgroundColor: Colors.secondary,
      paddingHorizontal: 24,
      paddingVertical: 14,
   },
});
