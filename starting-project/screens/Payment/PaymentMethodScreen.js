import { StyleSheet, Text, View, Alert } from 'react-native';
import { useState, useEffect } from 'react';

import Button from '../../componnets/UI/Button';
import PaymentButton from '../../componnets/UI/PaymentButton';
const bookImg = require('../../assets/img/book.png');
const moneyImg = require('../../assets/img/money.png');
let USER_OPTION = '';

const PaymentMethodScreen = ({ route, navigation }) => {
   const { userBookId, externalBookId, userBookIsSelected } = route.params;
   const [externalId, setExternalId] = useState('');
   const [moneyIsSelected, setMoneyIsSelected] = useState(false);
   const [bookIsSelected, setBookIsSelected] = useState();

   useEffect(() => {
      setExternalId(externalBookId);
   }, []);

   useEffect(() => {
      setBookIsSelected(userBookIsSelected);
   }, [userBookIsSelected]);

   function moneyHandler() {
      setMoneyIsSelected(!moneyIsSelected);
      setBookIsSelected(false);
   }

   function bookHandler() {
      setBookIsSelected(true);
      setMoneyIsSelected(false);
      navigation.navigate('UserBookOption');
   }

   function confirmOptionHandler() {
      if (moneyIsSelected === true) {
         USER_OPTION = 'Money';
         navigation.navigate('ExchangeDetail', {
            externalBookId: externalId,
            userBookId: userBookId,
            userOption: USER_OPTION,
         });
      } else if (bookIsSelected === true) {
         USER_OPTION = 'Book';
         navigation.navigate('ExchangeDetail', {
            externalBookId: externalId,
            userBookId: userBookId,
            userOption: USER_OPTION,
         });
      } else {
         Alert.alert(
            'Pagamento não selecionado !',
            'Escolha um método de pagamento!'
         );
      }
   }

   return (
      <View style={styles.container}>
         <Text style={styles.title}>Selecione uma forma de Pagamento</Text>
         <PaymentButton
            text={'Livro'}
            image={bookImg}
            onPress={bookHandler}
            onSelect={bookIsSelected}
         />
         <PaymentButton
            text={'Pontos'}
            image={moneyImg}
            onPress={moneyHandler}
            onSelect={moneyIsSelected}
         />
         <Button onPress={confirmOptionHandler}>Confirmar</Button>
      </View>
   );
};

export default PaymentMethodScreen;

const styles = StyleSheet.create({
   container: {
      marginHorizontal: 30,
      marginVertical: 30,
   },
   title: {
      fontSize: 16,
      fontFamily: 'lato-bold',
      textAlign: 'center',
      marginBottom: 30,
   },
});
