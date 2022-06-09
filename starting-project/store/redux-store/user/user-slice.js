import { createSlice } from '@reduxjs/toolkit';
const initialState = { userData: {}, filteredBook: {}, userLibrarie: [] };
const userSlice = createSlice({
   name: 'user',
   initialState: initialState,
   reducers: {
      getUserData(state, action) {
         const newUserData = action.payload;
         state.userData = { ...newUserData };
      },

      getLibrarie(state, action) {
         const newLibrarie = action.payload;
         const existingLibrarie = state.userLibrarie.find(
            (book) => book.id === newLibrarie.id
         );

         if (!existingLibrarie) {
            state.userLibrarie.push({
               id: newLibrarie.id,
               name: newLibrarie.name,
               language: newLibrarie.language,
               author: newLibrarie.author,
               owner: {
                  credits: newLibrarie.owner.credits,
                  firstName: newLibrarie.owner.firstName,
                  id: newLibrarie.owner.id,
                  lastName: newLibrarie.owner.lastName,
                  picture: newLibrarie.owner.picture,
               },
               publisher: newLibrarie.publisher,
               pagesQuantity: newLibrarie.pagesQuantity,
               price: newLibrarie.price,
               synopsis: newLibrarie.synopsis,
               condition: newLibrarie.condition,
               bookImages: {
                  frontSideImage: newLibrarie.bookImages.frontSideImage,
                  backSideImage: newLibrarie.bookImages.backSideImage,
                  leftSideImage: newLibrarie.bookImages.leftSideImage,
                  rightSideImage: newLibrarie.bookImages.rightSideImage,
               },
            });
         }
      },

      getFilteredBook(state, action) {
         const newFilteredBook = action.payload;
         state.filteredBook = { ...newFilteredBook };
      },

      logout(state) {},
   },
});

export const userActions = userSlice.actions;

export default userSlice;
