import { StyleSheet, ScrollView, View } from 'react-native';
import { useState, useEffect } from 'react';
import HistoryItem from '../../componnets/HistoryScreen/HistoryItem';
import { getFilteredHistoryData } from '../../store/redux-store/user/user-actions';
import { useSelector, useDispatch } from 'react-redux';

const HistoryScreen = ({ navigation }) => {
   const dispatch = useDispatch();
   const [bookHistoryIsEmpty, setBookHistoryIsEmpty] = useState(false);
   const [creditHistoryIsEmpty, setCreditHistoryIsEmpty] = useState(false);
   const userBookHistory = useSelector((state) => state.user.bookHistory);
   const userCreditHistory = useSelector((state) => state.user.creditHistory);

   useEffect(() => {
      if (userBookHistory.length === 0) {
         setBookHistoryIsEmpty(false);
      } else {
         setBookHistoryIsEmpty(true);
      }
   }, [userBookHistory]);

   useEffect(() => {
      if (userCreditHistory.length === 0) {
         setCreditHistoryIsEmpty(false);
      } else {
         setCreditHistoryIsEmpty(true);
      }
   }, [userCreditHistory]);

   function detailHistoryHandler(itemId, exchangeType) {
      const filteredHistory = userBookHistory.filter(
         (item) => item.id === itemId
      );
      const filteredData = filteredHistory[0];
      dispatch(getFilteredHistoryData(filteredData));

      navigation.navigate('HistoryDetailItem', { exchangeType: exchangeType });
   }

   return (
      <ScrollView>
         <View style={styles.container}>
            {bookHistoryIsEmpty &&
               userCreditHistory.map((item) => (
                  <HistoryItem
                     key={item.id}
                     onPress={detailHistoryHandler}
                     date={item.exchangeDate}
                     ownerName={`${item.requester.firstName} ${item.requester.lastName}`}
                     historyId={item.id}
                     exchangeType={item.type}
                  />
               ))}
            {creditHistoryIsEmpty &&
               userBookHistory.map((item) => (
                  <HistoryItem
                     key={item.id}
                     onPress={detailHistoryHandler}
                     date={item.exchangeDate}
                     ownerName={`${item.requester.firstName} ${item.requester.lastName}`}
                     historyId={item.id}
                     exchangeType={item.type}
                  />
               ))}
         </View>
      </ScrollView>
   );
};

export default HistoryScreen;

const styles = StyleSheet.create({
   container: {
      marginBottom: 30,
   },
});
