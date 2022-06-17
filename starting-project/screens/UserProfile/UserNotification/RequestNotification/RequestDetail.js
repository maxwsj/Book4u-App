import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { useState, useEffect, useContext } from 'react';
import { Colors } from '../../../../constants/styles';
import Button from '../../../../componnets/UI/Button';
import PaymentNotification from '../../../../componnets/UI/PaymentCard/PaymentNotification';

import { useSelector, useDispatch } from 'react-redux';

import { AuthContext } from '../../../../store/auth-context';

const RequestDetail = ({ route, navigation }) => {
   const authCtx = useContext(AuthContext);
   const dispatch = useDispatch();
   const requestData = useSelector((state) => state.user.requestDetail);
   const [bookOfferedData, setBookOfferedData] = useState({});
   const [requiredBookData, setRequiredBookData] = useState({});

   const [creditsIsGreater, setCreditsIsGreater] = useState(false);
   const [creditsIsLess, setCreditsIsLess] = useState(false);
   const [creditIsEqual, setCreditsIsEqual] = useState(false);
   const [bookExchange, setBookExchange] = useState(false);
   const [exchangeType, setExchangeType] = useState('');

   useEffect(() => {
      setBookOfferedData({ ...requestData.bookOffered });
      setRequiredBookData({ ...requestData.requiredBook });
   }, [requestData]);

   useEffect(() => {
      if (bookOfferedData !== {}) {
         setExchangeType('Livro');
         setBookExchange(true);
      } else {
         setExchangeType('Pontos');
      }
   }, []);

   useEffect(() => {
      const oferedPrice = +bookOfferedData.price;
      const requiredPrice = +requiredBookData.price;

      if (oferedPrice > requiredPrice) {
         setCreditsIsGreater(true);
         setCreditsIsLess(false);
         setCreditsIsEqual(false);
      }

      if (oferedPrice < requiredPrice) {
         setCreditsIsLess(true);
         setCreditsIsGreater(false);
         setCreditsIsEqual(false);
      }
      if (oferedPrice == requiredPrice) {
         setCreditsIsEqual(true);
         setCreditsIsGreater(false);
         setCreditsIsLess(false);
      }
   }, [bookOfferedData, creditsIsGreater, creditsIsLess, creditIsEqual]);

   return (
      <ScrollView>
         <View style={styles.container}>
            <Text style={styles.title}>Usuário</Text>
            <View style={styles.card}>
               <Text style={styles.text}>{bookOfferedData.owner}</Text>
            </View>
            <Text style={styles.title}>Endereço</Text>
            <View style={styles.card}>
               <Text style={styles.text}>
                  {`${bookOfferedData.ownerState}, ${bookOfferedData.ownerCity}`}
               </Text>
               <Text style={[styles.text, styles.subText]}>
                  {`${bookOfferedData.ownerStreet}, ${bookOfferedData.ownerDistric} , ${bookOfferedData.ownerHouseNumber}`}
               </Text>
            </View>
            <Text style={styles.title}>Pedido</Text>
            <View style={styles.bookContainer}>
               <View style={styles.imageContainer}>
                  <Image
                     style={styles.bookImage}
                     source={{
                        uri: bookOfferedData.bookImage,
                     }}
                  />
               </View>
               <View style={styles.bookInfoContainer}>
                  <Text style={styles.bookTitle}>{bookOfferedData.name}</Text>
                  <Text style={styles.bookAuthor}>
                     {bookOfferedData.author}
                  </Text>
                  <Text
                     style={styles.bookPrice}
                  >{`Pontos: ${bookOfferedData.price}`}</Text>
               </View>
            </View>

            <Text style={styles.title}>Método de pagamento</Text>
            <View style={styles.card}>
               <Text style={styles.text}>{exchangeType}</Text>
            </View>
            <View style={styles.bookContainer}>
               <View style={styles.imageContainer}>
                  <Image
                     style={styles.bookImage}
                     source={{
                        uri: requiredBookData.bookImage,
                     }}
                  />
               </View>
               <View style={styles.bookInfoContainer}>
                  <Text style={styles.bookTitle}>{requiredBookData.name}</Text>
                  <Text style={styles.bookAuthor}>
                     {requiredBookData.author}
                  </Text>
                  <Text
                     style={styles.bookPrice}
                  >{`Pontos: ${requiredBookData.price}`}</Text>
               </View>
            </View>
            {creditsIsGreater && (
               <PaymentNotification
                  text={'O valor do livro ofertado é maior que o do seu livro!'}
               />
            )}
            {creditsIsLess && (
               <PaymentNotification
                  text={'O valor do livro ofertado é menor que o do seu livro!'}
               />
            )}
            {creditIsEqual && (
               <PaymentNotification
                  text={
                     'O valor do livro ofertado é igual ao valor do seu livro!'
                  }
               />
            )}
            <View style={styles.buttonContainer}>
               <Button onPress={() => {}} stylesBtn={styles.buttonCancel}>
                  Recusar
               </Button>
               <Button onPress={() => {}} stylesBtn={styles.buttonConfirm}>
                  Aceitar
               </Button>
            </View>
         </View>
      </ScrollView>
   );
};

export default RequestDetail;

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
