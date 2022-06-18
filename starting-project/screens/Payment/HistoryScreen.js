import { StyleSheet, ScrollView, View } from 'react-native';
import { useState, useEffect } from 'react';
import HistoryItem from '../../componnets/HistoryScreen/HistoryItem';
import { getFilteredHistoryData } from '../../store/redux-store/user/user-actions';
import { useSelector, useDispatch } from 'react-redux';

const HistoryScreen = ({ navigation }) => {
   const dispatch = useDispatch();
   const [historyIsEmpty, setHistoryIsEmpty] = useState(false);
   const userHistory = useSelector((state) => state.user.history);

   useEffect(() => {
      if (userHistory.length === 0) {
         setHistoryIsEmpty(false);
      } else {
         setHistoryIsEmpty(true);
      }
   }, [userHistory]);

   function detailHistoryHandler(itemId) {
      const filteredHistory = userHistory.filter((item) => item.id === itemId);
      const filteredData = filteredHistory[0];
      dispatch(getFilteredHistoryData(filteredData));

      navigation.navigate('HistoryDetailItem');
   }

   return (
      <ScrollView>
         <View style={styles.container}>
            {historyIsEmpty &&
               userHistory.map((item) => (
                  <HistoryItem
                     key={item.id}
                     onPress={detailHistoryHandler}
                     date={item.exchangeDate}
                     ownerName={`${item.requester.firstName} ${item.requester.lastName}`}
                     historyId={item.id}
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
