import { StyleSheet, Text, View, Image } from 'react-native';
import { Colors } from '../../../constants/styles';
import Button from '../Button';
import { useEffect, useState, useContext } from 'react';
import bookService from '../../../util/http-book';
import { AuthContext } from '../../../store/auth-context';

const SuccessfullyNotificationItem = ({
   bookImg,
   bookName,
   bookAuthor,
   ownerName,
   ownerState,
   ownerCity,
   situation,
   read,
   tradeId,
}) => {
   const [btnSituation, setBtnSituation] = useState({});
   const authCtx = useContext(AuthContext);
   const [readNot, setReadNot] = useState(read);

   useEffect(() => {
      if (situation == 'Pendente') {
         const btnStyle = {
            backgroundColor: Colors.primary,
         };
         setBtnSituation(btnStyle);
      } else if (situation == 'Confirmado') {
         const btnStyle = {
            backgroundColor: Colors.darkCyan,
         };
         setBtnSituation(btnStyle);
      } else if (situation == 'Recusado') {
         const btnStyle = {
            backgroundColor: Colors.secondary,
         };
         setBtnSituation(btnStyle);
      }
   }, [situation]);

   async function setReadHandler() {
      setReadNot('Read');
      if (readNot == 'Nonread') {
         bookService.setReadNotification(authCtx.token, tradeId);
      }
   }

   return (
      <View
         style={[readNot == 'Nonread' ? styles.nonReadCard : styles.readCard]}
      >
         <View style={styles.cardItems}>
            <View style={styles.imageContainer}>
               <Image
                  style={styles.bookImage}
                  source={{
                     uri: bookImg,
                  }}
               />
            </View>
            <View>
               <View>
                  <Text style={styles.userName}>{ownerName}</Text>
                  <Text
                     style={styles.userAddress}
                  >{`${ownerState} ${ownerCity}`}</Text>
               </View>
               <View style={styles.bookNameContainer}>
                  <Text style={styles.bookName}>{bookName}</Text>
                  <Text style={styles.bookAuthor}>{bookAuthor}</Text>
               </View>
            </View>
            <View>
               <Text style={styles.textNotification}>1 minuto atrás</Text>
            </View>
         </View>

         <View style={styles.buttonContainer}>
            <Button stylesBtn={btnSituation} onPress={setReadHandler}>
               {situation}
            </Button>
         </View>
      </View>
   );
};

export default SuccessfullyNotificationItem;

const styles = StyleSheet.create({
   readCard: {
      backgroundColor: Colors.silver50,
      elevation: 6,
      borderRadius: 6,
      marginBottom: 30,
   },

   nonReadCard: {
      backgroundColor: Colors.silver50,
      elevation: 6,
      borderRadius: 6,
      marginBottom: 30,
      borderColor: Colors.secondary,
      borderWidth: 1,
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
