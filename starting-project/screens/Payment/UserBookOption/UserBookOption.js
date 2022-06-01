import { StyleSheet, View, FlatList, Dimensions } from 'react-native';
import BookVerticalItem from '../../../componnets/UserLibrarie/BookVerticalItem';

import { BOOK_DATA } from '../../../data/dummy-data';

const UserBookOption = ({ navigation }) => {
   function renderBookItem(itemData) {
      function pressHandler() {
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
            data={BOOK_DATA}
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
