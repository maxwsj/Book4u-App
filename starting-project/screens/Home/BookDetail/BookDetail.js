import { StyleSheet, ScrollView } from 'react-native';
import BookDetailItems from '../../../componnets/BookDetails/BookDetailItems';
import BookDetailList from '../../../componnets/BookDetails/BookDetailList';
import { BOOK_DATA } from '../../../data/dummy-data';

function BookDetail({ route, navigation }) {
   const { bookId } = route.params;

   const bookDetails = BOOK_DATA.filter((bookItem) => {
      return bookItem.id === bookId;
   });

   const images = Object.values({ ...bookDetails[0].bookImages });

   return (
      <>
         <BookDetailList bookImages={images} />
         <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
            <BookDetailItems bookData={bookDetails} />
         </ScrollView>
      </>
   );
}

export default BookDetail;

const styles = StyleSheet.create({});
