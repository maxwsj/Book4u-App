import { createSlice } from '@reduxjs/toolkit';
const initialState = { userData: {}, filteredBook: {}, userLibrarie: [] };
const externalUserSlice = createSlice({
   name: 'externalUser',
   initialState: initialState,
   reducers: {
      getExternalUserData(state, action) {
         const newUserData = action.payload;
         state.userData = { ...newUserData };
      },
      getUserLibrarie(state, action) {
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
                  cellphone: newLibrarie.owner.cellphone,
                  city: newLibrarie.owner.city,
                  complement: newLibrarie.owner.complement,
                  district: newLibrarie.owner.district,
                  houseNumber: newLibrarie.owner.houseNumber,
                  state: newLibrarie.owner.state,
                  streetName: newLibrarie.owner.streetName,
                  telephone: newLibrarie.owner.telephone,
                  zipCode: newLibrarie.owner.zipCode,
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
   },
});

export const externalUserActions = externalUserSlice.actions;

export default externalUserSlice;
