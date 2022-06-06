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
   },
});

export const externalUserActions = externalUserSlice.actions;

export default externalUserSlice;
