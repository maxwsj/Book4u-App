import { StyleSheet, Pressable, View, Text, ScrollView } from 'react-native';
import ExchangeNotificationItem from '../../../componnets/UI/Notification/ExchangeNotificationItem';
import SuccessfullyNotificationItem from '../../../componnets/UI/Notification/SuccessfullyNotificationItem';
import UnsuccessfulNotificationItem from '../../../componnets/UI/Notification/UnsuccessfulNotificationItem';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

const UserNotification = () => {
   const [isNotEmpty, setIsNotEmpty] = useState(false);

   useEffect(() => {
      if (notification.length === 0) {
         setIsNotEmpty(false);
      } else {
         setIsNotEmpty(true);
      }
   }, [notification]);

   const notification = useSelector((state) => state.user.userNotifications);

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
            {isNotEmpty &&
               notification.map((item) => (
                  <ExchangeNotificationItem
                     key={item.tradeId}
                     externalUserName={item.userRequested.owner}
                     externalUserAddress={`${item.userRequested.state} ${item.userRequested.city}`}
                     externalUserPicture={item.userRequested.picture}
                     tradeId={item.tradeId}
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
