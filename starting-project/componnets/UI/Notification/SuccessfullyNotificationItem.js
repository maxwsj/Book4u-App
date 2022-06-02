import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import { Colors } from '../../../constants/styles';
import Button from '../Button';

const SuccessfullyNotificationItem = () => {
   return (
      <View style={styles.card}>
         <View style={styles.cardItems}>
            <View style={styles.imageContainer}>
               <Image
                  style={styles.bookImage}
                  source={{
                     uri: 'https://images.unsplash.com/photo-1592496431122-2349e0fbc666?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=912&q=80',
                  }}
               />
            </View>
            <View>
               <View>
                  <Text style={styles.userName}>Aragon Swifte</Text>
                  <Text style={styles.userAddress}>Salvador Bahia</Text>
               </View>
               <View style={styles.bookNameContainer}>
                  <Text style={styles.bookName}>How Innovation Works</Text>
                  <Text style={styles.bookAuthor}>Partick Rotfhus</Text>
               </View>
            </View>
            <View>
               <Text style={styles.textNotification}>1 minuto atrás</Text>
            </View>
         </View>

         <View style={styles.buttonContainer}>
            <Button stylesBtn={styles.button}>Solicitado com sucesso !</Button>
         </View>
      </View>
   );
};

export default SuccessfullyNotificationItem;

const styles = StyleSheet.create({
   card: {
      backgroundColor: Colors.silver50,
      elevation: 6,
      borderRadius: 6,
      marginBottom: 30,
   },
   profileBackgroundColor: {
      backgroundColor: Colors.silver100,
      borderColor: Colors.silver300,
   },
   cardItems: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginHorizontal: 12,
      marginVertical: 12,
   },
   buttonContainer: {
      marginHorizontal: 30,
      marginBottom: 12,
   },
   button: {
      backgroundColor: Colors.darkCyan,
   },
   textNotification: {
      fontSize: 10,
      fontFamily: 'lato-regular',
      color: Colors.dimgray,
   },
   userName: {
      fontFamily: 'lato-light',
      fontSize: 18,
      color: Colors.dimgray,
      textAlign: 'center',
   },
   userAddress: {
      fontFamily: 'lato-light',
      fontSize: 14,
      color: Colors.dimgray,
      textAlign: 'center',
      marginTop: 6,
   },
   imageContainer: {
      width: 100,
      height: 150,
   },
   bookImage: {
      width: '100%',
      height: '100%',
      borderRadius: 5,
   },
   bookNameContainer: {
      marginTop: 30,
      width: 150,
   },
   bookName: {
      fontFamily: 'lato-light',
      fontSize: 18,
      color: Colors.dimgray,
      textAlign: 'center',
   },
   bookAuthor: {
      fontFamily: 'lato-light',
      fontSize: 14,
      color: Colors.dimgray,
      textAlign: 'center',
      marginTop: 6,
   },
});
