import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import { CommonActions } from '@react-navigation/native';
import { Colors } from '../../../constants/styles';
import Button from '../../../componnets/UI/Button';
const successfullyImg = require('../../../assets/img/successfully-exchanged.png');

const SuccessfullyExchanged = ({ navigation }) => {
   function confirmSuccessHandler() {
      navigation.dispatch(
         CommonActions.reset({
            index: 1,
            routes: [
               {
                  name: 'Home',
               },
            ],
         })
      );
   }
   return (
      <>
         <View style={styles.container}>
            <View style={styles.imageContainer}>
               <Image style={styles.bookImage} source={successfullyImg} />
            </View>
            <View style={styles.divider} />
            <View style={styles.titleContainer}>
               <Text style={styles.title}>Pedido Realizado com Sucesso !</Text>
               <Text style={styles.subtitle}>
                  O usuário será informado sobre o seu interesse na troca !
               </Text>
            </View>
         </View>
         <View style={styles.buttonContainer}>
            <Button onPress={confirmSuccessHandler}>Confirmar</Button>
         </View>
      </>
   );
};

export default SuccessfullyExchanged;

const styles = StyleSheet.create({
   container: {
      marginHorizontal: 30,
      alignItems: 'center',
   },
   titleContainer: {
      marginTop: 60,
   },
   title: {
      fontFamily: 'lato-bold',
      fontSize: 18,
      textAlign: 'center',
      color: Colors.dimgray,
   },
   subtitle: {
      fontFamily: 'lato-bold',
      fontSize: 14,
      color: Colors.silver200,
      marginTop: 14,
      textAlign: 'center',
   },
   bookImage: {
      width: '100%',
      height: '100%',
      borderRadius: 5,
   },
   imageContainer: {
      width: 300,
      height: 300,
      marginVertical: 14,
   },
   divider: {
      borderBottomColor: Colors.secondary,
      borderBottomWidth: 1,
      width: '60%',
      height: 1,
   },
   buttonContainer: {
      marginHorizontal: 30,
      marginTop: 60,
   },
});
