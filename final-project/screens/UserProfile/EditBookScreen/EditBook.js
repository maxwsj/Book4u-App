import { StyleSheet, View, FlatList } from 'react-native';
import BookVerticalItem from '../../../componnets/UserLibrarie/BookVerticalItem';

const EditBook = ({ navigation, route }) => {
   const { userBooks } = route.params;

   function renderBookItem(itemData) {
      function pressHandler() {
         navigation.navigate('EditBookForm', {
            bookId: itemData.item.id,
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
            data={userBooks}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            decelerationRate={'fast'}
            renderItem={renderBookItem}
         />
      </View>
   );
};

export default EditBook;

const styles = StyleSheet.create({});
