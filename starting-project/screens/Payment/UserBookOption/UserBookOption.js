import { useContext, useEffect } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import BookVerticalItem from '../../../componnets/UserLibrarie/BookVerticalItem';

import { useDispatch, useSelector } from 'react-redux';
import { filteredUserBook } from '../../../store/redux-store/user/user-actions';

const UserBookOption = ({ navigation }) => {
   const userLibrarie = useSelector((state) => state.user.userLibrarie);
   const dispatch = useDispatch();
   function filteredUserBookDataHandler(userBookId) {
      const selectedBookData = userLibrarie.filter((bookItem) => {
         return bookItem.id === userBookId;
      });
      dispatch(filteredUserBook(selectedBookData));
   }

   function renderBookItem(itemData) {
      function pressHandler() {
         filteredUserBookDataHandler(itemData.item.id);
         navigation.navigate('PaymentMethodScreen', {
            userBookId: itemData.item.id,
            userBookIsSelected: true,
         });
      }

      const book = itemData.item;

      const bookItemProps = {
         id: book.id,
         title: book.name,
         imageUrl: book.bookImages.frontSideImage,
         onPress: pressHandler,
      };

      return <BookVerticalItem {...bookItemProps} />;
   }

   return (
      <View>
         <FlatList
            data={userLibrarie}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            decelerationRate={'fast'}
            renderItem={renderBookItem}
         />
      </View>
   );
};

export default UserBookOption;

const styles = StyleSheet.create({});
