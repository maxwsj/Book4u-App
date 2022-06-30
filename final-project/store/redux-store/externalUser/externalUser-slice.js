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
         state.userLibrarie = newLibrarie;
      },
   },
});

export const externalUserActions = externalUserSlice.actions;

export default externalUserSlice;
