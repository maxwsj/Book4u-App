import { StyleSheet, ScrollView } from 'react-native';
import UserBookDetailItem from '../../../componnets/ProfileData/UserLibrarie/UserBookDetailItem';
import BookDetailList from '../../../componnets/BookDetails/BookDetailList';
import { BOOK_DATA } from '../../../data/dummy-data';

function UserBookDetail({ route, navigation }) {
   const { bookId } = route.params;

   const bookDetails = BOOK_DATA.filter((bookItem) => {
      return bookItem.id === bookId;
   });

   const images = Object.values({ ...bookDetails[0].bookImages });

   return (
      <>
         <BookDetailList bookImages={images} />
         <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
            <UserBookDetailItem bookData={bookDetails} />
         </ScrollView>
      </>
   );
}

export default UserBookDetail;

const styles = StyleSheet.create({});
