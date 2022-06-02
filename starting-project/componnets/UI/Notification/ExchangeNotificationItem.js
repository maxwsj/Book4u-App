import { StyleSheet, Text, View, Pressable } from 'react-native';
import React from 'react';
import { Avatar } from 'react-native-paper';
import Button from '../Button';
import { Colors } from '../../../constants/styles';

const TradeNotificationItem = () => {
   return (
      <View style={styles.card}>
         <View style={styles.cardItems}>
            <Pressable onPress={() => console.log('profile')}>
               <Avatar.Image size={50} style={styles.profileBackgroundColor} />
            </Pressable>
            <View>
               <Text style={styles.userName}>Aragon Swifte</Text>
               <Text style={styles.userAddress}>Salvador Bahia</Text>
            </View>
            <View>
               <Text style={styles.textNotification}>1 minuto atrás</Text>
            </View>
         </View>
         <View style={styles.buttonContainer}>
            <Button stylesBtn={styles.button}>
               Deseja realizar uma troca !
            </Button>
         </View>
      </View>
   );
};

export default TradeNotificationItem;

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
   },
   userAddress: {
      fontFamily: 'lato-light',
      fontSize: 14,
      color: Colors.dimgray,
      textAlign: 'center',
   },
});
