import { StyleSheet, Text, View, Pressable } from 'react-native';
import React from 'react';
import { Colors } from '../../constants/styles';
import IconBtn from '../UI/IconBtn';

const BookTradeContainer = ({ dividerStyle }) => {
   return (
      <View style={styles.tradeBtnContainer}>
         <View style={[styles.bookInfoItems, dividerStyle]}>
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
                  iconBtnStyle={styles.iconBtnStyle}
                  onPress={() => console.log('remove')}
               />
            </View>
            <View style={styles.tradeQuantity}>
               <Text>1</Text>
            </View>
            <View>
               <IconBtn
                  icon={'add-outline'}
                  size={24}
                  color='black'
                  iconBtnStyle={styles.iconBtnStyle}
                  onPress={() => console.log('add')}
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
      marginHorizontal: 15,
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
      marginHorizontal: 10,
   },
});
