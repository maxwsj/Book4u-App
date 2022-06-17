import { StyleSheet, Text, View, Pressable } from 'react-native';
import { useEffect, useContext } from 'react';
import { Avatar } from 'react-native-paper';
import Button from '../Button';
import { Colors } from '../../../constants/styles';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { fetchRequestById } from '../../../store/redux-store/user/user-actions';
import { AuthContext } from '../../../store/auth-context';

const TradeNotificationItem = ({
   externalUserName,
   externalUserAddress,
   externalUserPicture,
   tradeId,
}) => {
   const dispatch = useDispatch();
   const authCtx = useContext(AuthContext);

   const navigation = useNavigation();

   function requestDetailHandler() {
      navigation.navigate('RequestDetail', { tradeId: tradeId });
      dispatch(fetchRequestById(authCtx.token, tradeId));
   }
   return (
      <View style={styles.card}>
         <View style={styles.cardItems}>
            <Pressable onPress={() => console.log('profile')}>
               <Avatar.Image
                  size={50}
                  style={styles.profileBackgroundColor}
                  source={{ uri: externalUserPicture }}
               />
            </Pressable>
            <View>
               <Text style={styles.userName}>{externalUserName}</Text>
               <Text style={styles.userAddress}>{externalUserAddress}</Text>
            </View>
            <View>
               <Text style={styles.textNotification}>1 minuto atrás</Text>
            </View>
         </View>
         <View style={styles.buttonContainer}>
            <Button onPress={requestDetailHandler} stylesBtn={styles.button}>
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
