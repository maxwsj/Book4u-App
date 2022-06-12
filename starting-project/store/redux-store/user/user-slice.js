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

      getLibrarie(state, { payload }) {
         const newLibrarie = state.userLibrarie.find(
            (item) => item.id === payload.id
         );
         if (!newLibrarie) {
            state.userLibrarie = payload;
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
