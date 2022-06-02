import { StyleSheet, Pressable, View, Text, ScrollView } from 'react-native';
import ExchangeNotificationItem from '../../../componnets/UI/Notification/ExchangeNotificationItem';
import SuccessfullyNotificationItem from '../../../componnets/UI/Notification/SuccessfullyNotificationItem';
import UnsuccessfulNotificationItem from '../../../componnets/UI/Notification/UnsuccessfulNotificationItem';

const UserNotification = () => {
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
            <ExchangeNotificationItem />
            <SuccessfullyNotificationItem />
            <UnsuccessfulNotificationItem />
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
