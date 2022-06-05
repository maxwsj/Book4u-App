import { createSlice } from '@reduxjs/toolkit';
const initialState = { userData: {} };
const userSlice = createSlice({
   name: 'user',
   initialState: initialState,
   reducers: {
      getUserData(state, action) {
         const newUserData = action.payload;
         state.userData = { ...newUserData };
      },
   },
});

export const userActions = userSlice.actions;

export default userSlice;
