import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import { Colors } from '../../constants/styles';
import IconBtn from '../UI/IconBtn';

const BookTradeContainer = () => {
   const [bookQuantity, setBookQuantity] = useState(0);

   function addHandler() {
      setBookQuantity((prevBook) => prevBook + 1);
   }
   function removeHandler() {
      setBookQuantity((prevBook) => (prevBook > 0 ? prevBook - 1 : prevBook));
   }

   return (
      <View style={styles.tradeBtnContainer}>
         <View style={[styles.bookInfoItems, styles.divider]}>
            <View style={styles.tradeTextWrapper}>
               <Text style={styles.tradeText}>Quantidade</Text>
            </View>
         </View>
         <View style={[styles.bookInfoItems, styles.tradeButtons]}>
            <View>
               <IconBtn
                  icon={'remove-outline'}
                  size={24}
                  color='black'
                  iconBtnStyle={[styles.iconBtnStyle, styles.removeBtn]}
                  onPress={removeHandler}
               />
            </View>
            <View style={styles.tradeQuantity}>
               <Text>{bookQuantity}</Text>
            </View>
            <View>
               <IconBtn
                  icon={'add-outline'}
                  size={24}
                  color='black'
                  iconBtnStyle={[styles.iconBtnStyle, styles.addBtn]}
                  onPress={addHandler}
               />
            </View>
         </View>
      </View>
   );
};

export default BookTradeContainer;

const styles = StyleSheet.create({
   tradeBtnContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      backgroundColor: Colors.silver50,
      borderRadius: 5,
      elevation: 4,
      height: 60,
   },
   bookInfoItems: {
      justifyContent: 'center',
      alignItems: 'center',
   },
   tradeButtons: {
      flexDirection: 'row',
   },
   tradeQuantity: {
      marginHorizontal: 5,
   },
   tradeTextWrapper: {
      marginLeft: 10,
   },
   tradeText: {
      textAlign: 'center',
      fontFamily: 'lato-bold',
      color: Colors.silver400,
      fontSize: 14,
   },
   iconBtnStyle: {
      padding: 0,
      marginHorizontal: 25,
   },
   removeBtn: {
      marginRight: 2,
   },
   addBtn: {
      marginLeft: 10,
   },
   divider: {
      borderRightWidth: 1,
      paddingRight: 24,
      borderRightColor: Colors.silver300,
   },
});
