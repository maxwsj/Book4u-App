import { createSlice } from '@reduxjs/toolkit';
const initialState = { bookData: [], filteredBook: {} };
const bookSlice = createSlice({
   name: 'book',
   initialState: initialState,
   reducers: {
      getBookData(state, action) {
         const newBook = action.payload;
         const existingBook = state.bookData.find(
            (book) => book.id === newBook.id
         );

         if (!existingBook) {
            state.bookData.push({
               id: newBook.id,
               name: newBook.name,
               language: newBook.language,
               author: newBook.author,
               owner: {
                  credits: newBook.owner.credits,
                  firstName: newBook.owner.firstName,
                  id: newBook.owner.id,
                  lastName: newBook.owner.lastName,
                  picture: newBook.owner.picture,
               },
               publisher: newBook.publisher,
               pagesQuantity: newBook.pagesQuantity,
               price: newBook.price,
               synopsis: newBook.synopsis,
               condition: newBook.condition,
               bookImages: {
                  frontSideImage: newBook.bookImages.frontSideImage,
                  backSideImage: newBook.bookImages.backSideImage,
                  leftSideImage: newBook.bookImages.leftSideImage,
                  rightSideImage: newBook.bookImages.rightSideImage,
               },
            });
         }
      },
      getFilteredBookData(state, action) {
         const filteredBookData = action.payload;
         state.filteredBook = { ...filteredBookData };
      },
   },
});

export const bookActions = bookSlice.actions;

export default bookSlice;
