import { createSlice } from '@reduxjs/toolkit';
const initialState = {
   bookData: [],
   filteredBook: {},
   filteredGenBooks: [],
   recentBooks: [],
   searchedBook: [],
   searchedAuthor: [],
   genList: [],
};
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
            state.bookData = [...newBook];
         }
      },

      getSearchedBookData(state, action) {
         const newSearch = action.payload;
         const existingBook = state.searchedBook.find(
            (book) => book.id === newSearch.id
         );
         if (!existingBook) {
            state.searchedBook = [...newSearch];
         }
      },
      getSearchedAuthorBookData(state, action) {
         const newAuthor = action.payload;
         const existingBook = state.searchedAuthor.find(
            (book) => book.id === newAuthor.id
         );
         if (!existingBook) {
            state.searchedAuthor = [...newAuthor];
         }
      },

      getRecentBookData(state, action) {
         const newBook = action.payload;
         console.log(newBook);
         const existingBook = state.recentBooks.find(
            (book) => book.id === newBook.id
         );
         if (!existingBook) {
            state.recentBooks = [...newBook];
         }
      },

      getFilteredBookData(state, action) {
         const newBook = action.payload;

         state.filteredBook = {
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
               cellphone: newBook.owner.cellphone,
               city: newBook.owner.city,
               complement: newBook.owner.complement,
               district: newBook.owner.district,
               houseNumber: newBook.owner.houseNumber,
               state: newBook.owner.state,
               streetName: newBook.owner.streetName,
               telephone: newBook.owner.telephone,
               zipCode: newBook.owner.zipCode,
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
         };
      },

      clearFilteredBook(state, action) {
         state.filteredBook = initialState.filteredBook;
      },

      getBookGenData(state, action) {
         const newBook = action.payload;

         const existingBook = state.filteredGenBooks.find(
            (book) => book.id === newBook.id
         );

         if (!existingBook) {
            state.filteredGenBooks = [...newBook];
         }
      },

      getRegisteredBookGen(state, action) {
         const newGen = action.payload;
         state.genList = [...newGen];
      },
   },
});

export const bookActions = bookSlice.actions;

export default bookSlice;
