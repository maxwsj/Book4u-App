import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { useState, useEffect, useContext } from 'react';
import { Colors } from '../../../constants/styles';
import Button from '../../../componnets/UI/Button';
import UserBookOffer from '../../../componnets/ProfileData/Payment/UserBookOffer';

import { useSelector, useDispatch } from 'react-redux';
import { filteredBookData } from '../../../store/redux-store/book/book-actions';
import PaymentNotification from '../../../componnets/UI/PaymentCard/PaymentNotification';
import userService from '../../../util/http-user';

import { AuthContext } from '../../../store/auth-context';

const ExchangeDetail = ({ route, navigation }) => {
   const authCtx = useContext(AuthContext);
   const [creditsIsGreater, setCreditsIsGreater] = useState(false);
   const [creditsIsLess, setCreditsIsLess] = useState(false);
   const [creditIsEqual, setCreditsIsEqual] = useState(false);

   const { externalBookId, userBookId, userOption } = route.params;
   const dispatch = useDispatch();
   const book = useSelector((state) => state.book.bookData);
   const externalUserData = useSelector((state) => state.externalUser.userData);

   function selectedBookDataHandler() {
      const selectedBookData = book.filter((bookItem) => {
         return bookItem.id === externalBookId;
      });
      dispatch(filteredBookData(selectedBookData));
   }

   useEffect(() => {
      selectedBookDataHandler();
   }, [dispatch]);

   const selectedBookData = useSelector((state) => state.book.filteredBook);
   const filteredUserBookData = useSelector((state) => state.user.filteredBook);
   function confirmExchangeHandler() {
      sendUserExchangeOptionHandler();
      navigation.navigate('SuccessfullyExchanged');
   }
   function cancelExchangeHandler() {
      navigation.navigate('CanceledExchange');
   }

   useEffect(() => {
      if (
         +filteredUserBookData.price > +selectedBookData.price &&
         userOption === 'Book'
      ) {
         setCreditsIsGreater(true);
      } else if (
         +filteredUserBookData.price < +selectedBookData.price &&
         userOption === 'Book'
      ) {
         setCreditsIsLess(true);
      } else if (
         +filteredUserBookData.price === +selectedBookData.price &&
         userOption === 'Book'
      ) {
         setCreditsIsEqual(true);
      }
   }, []);

   async function sendUserExchangeOptionHandler() {
      console.log('Troca realizada com sucesso !');
      userService.exchangeBookWithBook(
         authCtx.token,
         filteredUserBookData.id,
         externalBookId
      );
   }

   return (
      <ScrollView>
         <View style={styles.container}>
            <Text style={styles.title}>Usuário</Text>
            <View style={styles.card}>
               <Text
                  style={styles.text}
               >{`${externalUserData.firstName} ${externalUserData.lastName}`}</Text>
            </View>
            <Text style={styles.title}>Endereço</Text>
            <View style={styles.card}>
               <Text style={styles.text}>
                  {`${externalUserData.state}, ${externalUserData.city}`}
               </Text>
               <Text style={[styles.text, styles.subText]}>
                  {`${externalUserData.streetName}, ${externalUserData.district}, ${externalUserData.houseNumber}`}
               </Text>
            </View>
            <Text style={styles.title}>Pedido</Text>
            <View style={styles.bookContainer}>
               <View style={styles.imageContainer}>
                  <Image
                     style={styles.bookImage}
                     source={{
                        uri: selectedBookData.bookImages.frontSideImage,
                     }}
                  />
               </View>
               <View style={styles.bookInfoContainer}>
                  <Text style={styles.bookTitle}>{selectedBookData.name}</Text>
                  <Text style={styles.bookAuthor}>
                     {selectedBookData.author}
                  </Text>
                  <Text
                     style={styles.bookPrice}
                  >{`Pontos: ${selectedBookData.price}`}</Text>
               </View>
            </View>
            <Text style={styles.title}>Método de pagamento</Text>
            <View style={styles.card}>
               <Text style={styles.text}>
                  {userOption === 'Book' ? 'Livro' : 'Pontos'}
               </Text>
            </View>
            {userOption === 'Book' ? (
               <UserBookOffer offerBookData={filteredUserBookData} />
            ) : null}
            {creditsIsGreater && (
               <PaymentNotification
                  text={'O valor do seu livro é maior que o livro desejado!'}
               />
            )}
            {creditsIsLess && (
               <PaymentNotification
                  text={'O valor do seu livro é menor que o livro desejado!'}
               />
            )}
            {creditIsEqual && (
               <PaymentNotification
                  text={'O valor do seu livro é igual ao livro desejado!'}
               />
            )}
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
