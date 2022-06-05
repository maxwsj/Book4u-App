import { StyleSheet, ScrollView } from 'react-native';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import BookDetailItems from '../../../componnets/BookDetails/BookDetailItems';
import BookDetailList from '../../../componnets/BookDetails/BookDetailList';
import { filteredBookData } from '../../../store/redux-store/book/book-actions';

function BookDetail({ route, navigation }) {
   const { bookId, bookData } = route.params;
   const dispatch = useDispatch();
   const [selectedBookImages, setSelectedBookImages] = useState({});

   async function getBookDataHandler() {
      const selectedBook = bookData.filter((bookItem) => {
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
            <BookDetailItems bookData={filteredBook} />
         </ScrollView>
      </>
   );
}

export default BookDetail;

const styles = StyleSheet.create({});
