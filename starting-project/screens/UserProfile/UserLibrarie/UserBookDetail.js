import { StyleSheet, ScrollView } from 'react-native';
import UserBookDetailItem from '../../../componnets/ProfileData/UserLibrarie/UserBookDetailItem';
import BookDetailList from '../../../componnets/BookDetails/BookDetailList';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { filteredBookData } from '../../../store/redux-store/book/book-actions';

function UserBookDetail({ route, navigation }) {
   const { bookId } = route.params;
   const dispatch = useDispatch();
   const [selectedBookImages, setSelectedBookImages] = useState({});
   const userLibrarie = useSelector((state) => state.user.userLibrarie);

   async function getBookDataHandler() {
      const selectedBook = userLibrarie.filter((bookItem) => {
         return bookItem.id === bookId;
      });
      dispatch(filteredBookData(selectedBook));
      const bookImgs = { ...selectedBook[0].bookImages };
      const images = Object.values(bookImgs);
      setSelectedBookImages(images);
   }

   useEffect(() => {
      getBookDataHandler();
   }, []);

   const filteredBook = useSelector((state) => state.book.filteredBook);

   return (
      <>
         <BookDetailList bookImages={selectedBookImages} />
         <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
            <UserBookDetailItem bookData={filteredBook} />
         </ScrollView>
      </>
   );
}

export default UserBookDetail;

const styles = StyleSheet.create({});
