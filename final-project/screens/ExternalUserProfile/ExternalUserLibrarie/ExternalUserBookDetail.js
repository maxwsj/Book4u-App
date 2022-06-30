import { ScrollView } from 'react-native';
import UserBookDetailItem from '../../../componnets/ProfileData/UserLibrarie/UserBookDetailItem';
import BookDetailList from '../../../componnets/BookDetails/BookDetailList';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { filteredBookData } from '../../../store/redux-store/book/book-actions';

function ExternalUserBookDetail({ route, navigation }) {
   const { bookId, isExternalUser } = route.params;
   const dispatch = useDispatch();
   const [selectedBookImages, setSelectedBookImages] = useState({});
   const userLibrarie = useSelector((state) => state.externalUser.userLibrarie);

   async function getBookDataHandler() {
      const selectedBook = userLibrarie.filter((bookItem) => {
         return bookItem.id === bookId;
      });
      console.log(selectedBook);
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
            <UserBookDetailItem
               bookData={filteredBook}
               isExternalUser={isExternalUser}
            />
         </ScrollView>
      </>
   );
}

export default ExternalUserBookDetail;
