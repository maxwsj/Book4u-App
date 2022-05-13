import {
   View,
   StyleSheet,
   FlatList,
   Dimensions,
   ScrollView,
   Text,
} from 'react-native';
import BookDetailItems from '../../../componnets/BookDetails/BookDetailItems';
import BookDetailsImage from '../../../componnets/BookDetails/BookDetailsImage';
import { BOOK_DATA } from '../../../data/dummy-data';

function BookDetail({ route, navigation }) {
   const { bookId } = route.params;

   const bookDetails = BOOK_DATA.filter((bookItem) => {
      return bookItem.id === bookId;
   });

   const images = Object.values({ ...bookDetails[0].bookImages });

   function renderBookItem({ item, index }) {
      return <BookDetailsImage imageUrl={item} />;
   }

   return (
      <>
         <FlatList
            data={images}
            keyExtractor={(item) => item}
            horizontal
            pagingEnabled
            snapToAlignment='start'
            showsHorizontalScrollIndicator={false}
            decelerationRate={'fast'}
            renderItem={renderBookItem}
            nestedScrollEnabled={true}
            extraData={bookId}
         />
         <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
            <BookDetailItems bookData={bookDetails} />
         </ScrollView>
      </>
   );
}

export default BookDetail;

const styles = StyleSheet.create({});
