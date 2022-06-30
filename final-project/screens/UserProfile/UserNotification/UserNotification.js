import { StyleSheet, Pressable, View, Text, ScrollView } from 'react-native';
import ExchangeNotificationItem from '../../../componnets/UI/Notification/ExchangeNotificationItem';
import SuccessfullyNotificationItem from '../../../componnets/UI/Notification/SuccessfullyNotificationItem';
import UnsuccessfulNotificationItem from '../../../componnets/UI/Notification/UnsuccessfulNotificationItem';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

const UserNotification = () => {
   const [exchangeNotIsNotEmpty, setExchangeNotIsNotEmpty] = useState(false);
   const [notificationInfoIsNotEmpty, setNotificationInfoIsNotEmpty] =
      useState(false);
   const [creditNotificationIsNotEmpty, setCreditNotificationIsNotEmpty] =
      useState(false);
   const [
      creditNotificationInfoIsNotEmpty,
      setCreditNotificationInfoIsNotEmpty,
   ] = useState(false);
   const hasNotification = useSelector((state) => state.user.hasNotification);

   const exchangeNotification = useSelector(
      (state) => state.user.enxchangeNotification
   );
   const notificationInformation = useSelector(
      (state) => state.user.notificationInfo
   );
   const creditNotification = useSelector(
      (state) => state.user.creditNotification
   );

   const creditNotificationInformation = useSelector(
      (state) => state.user.creditNotificationInfo
   );

   useEffect(() => {
      if (exchangeNotification.length === 0) {
         setExchangeNotIsNotEmpty(false);
      } else {
         setExchangeNotIsNotEmpty(true);
      }
   }, [exchangeNotification]);

   useEffect(() => {
      if (notificationInformation.length === 0) {
         setNotificationInfoIsNotEmpty(false);
      } else {
         setNotificationInfoIsNotEmpty(true);
      }
   }, [notificationInformation]);

   useEffect(() => {
      if (creditNotification.length === 0) {
         setCreditNotificationIsNotEmpty(false);
      } else {
         setCreditNotificationIsNotEmpty(true);
      }
   }, [creditNotification]);

   useEffect(() => {
      if (creditNotificationInformation.length === 0) {
         setCreditNotificationInfoIsNotEmpty(false);
      } else {
         setCreditNotificationInfoIsNotEmpty(true);
      }
   }, [creditNotificationInformation]);

   return (
      <ScrollView>
         <View style={styles.container}>
            <View style={styles.date}>
               <Text>Hoje</Text>
               <Pressable
                  style={({ pressed }) => pressed && styles.pressed}
                  onPress={() => console.log('Tudo lido')}
               >
                  <Text>Marcar tudo como lido</Text>
               </Pressable>
            </View>
            {exchangeNotIsNotEmpty &&
               exchangeNotification.map((item) => {
                  return (
                     <ExchangeNotificationItem
                        key={item.tradeId}
                        externalUserName={item.userRequested.owner}
                        externalUserAddress={`${item.userRequested.state} ${item.userRequested.city}`}
                        externalUserPicture={item.userRequested.picture}
                        tradeId={item.tradeId}
                     />
                  );
               })}
            {creditNotificationIsNotEmpty &&
               creditNotification.map((item) => {
                  return (
                     <ExchangeNotificationItem
                        key={item.tradeId}
                        externalUserName={item.userRequested.user}
                        externalUserAddress={`${item.userRequested.state} ${item.userRequested.city}`}
                        externalUserPicture={item.userRequested.picture}
                        credit={item.creditsToReceive}
                        tradeId={item.tradeId}
                     />
                  );
               })}
            {notificationInfoIsNotEmpty &&
               notificationInformation.map((item) => (
                  <SuccessfullyNotificationItem
                     key={item.tradeId}
                     bookName={item.bookRequired.name}
                     bookAuthor={item.bookRequired.authorName}
                     bookImg={item.bookRequired.bookImage}
                     ownerCity={item.bookRequired.ownerCity}
                     ownerName={item.bookRequired.owner}
                     ownerState={item.bookRequired.ownerState}
                     situation={item.situation}
                     tradeId={item.tradeId}
                     read={item.read}
                  />
               ))}

            {creditNotificationInfoIsNotEmpty &&
               creditNotificationInformation.map((item) => (
                  <SuccessfullyNotificationItem
                     key={item.tradeId}
                     bookName={item.bookRequired.bookName}
                     bookAuthor={item.bookRequired.author}
                     bookImg={item.bookRequired.bookImage}
                     ownerCity={item.bookRequired.city}
                     ownerName={item.bookRequired.owner}
                     ownerState={item.bookRequired.state}
                     situation={item.situation}
                     tradeId={item.tradeId}
                     read={item.read}
                  />
               ))}
         </View>
      </ScrollView>
   );
};

export default UserNotification;

const styles = StyleSheet.create({
   container: {
      marginHorizontal: 30,
   },
   date: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 30,
      marginBottom: 12,
   },
   pressed: {
      opacity: 0.7,
   },
});
