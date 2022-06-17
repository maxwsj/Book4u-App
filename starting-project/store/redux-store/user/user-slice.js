import { createSlice } from '@reduxjs/toolkit';
const initialState = {
   userData: {},
   filteredBook: {},
   userLibrarie: [],
   userNotifications: [],
   requestDetail: {},
};
const userSlice = createSlice({
   name: 'user',
   initialState: initialState,
   reducers: {
      getUserData(state, action) {
         const newUserData = action.payload;
         state.userData = { ...newUserData };
      },

      getUserProfilePicture(state, action) {
         const newPicture = action.payload;
         state.userData.picture = newPicture.picture;
      },

      getUserAddress(state, action) {
         const newAddress = action.payload;
         if (!newAddress.city == '') {
            state.userData.city = newAddress.city;
         }
         if (!newAddress.complement == '') {
            state.userData.complement = newAddress.complement;
         }
         if (!newAddress.state == '') {
            state.userData.state = newAddress.state;
         }
         if (!newAddress.district == '') {
            state.userData.district = newAddress.district;
         }
         if (!newAddress.houseNumber == '') {
            state.userData.houseNumber = newAddress.houseNumber;
         }
      },

      getUserCellphone(state, action) {
         const newCellphone = action.payload;
         state.userData.cellphone = newCellphone.cellphone;
      },

      getUserTelephone(state, action) {
         const newTelephone = action.payload;
         state.userData.telephone = newTelephone.telephone;
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

      getUserNotifications(state, action) {
         const newNotification = state.userNotifications.find(
            (item) => item.tradeId === action.payload.tradeId
         );
         if (!newNotification) {
            state.userNotifications = [...action.payload];
         }
      },

      getUserRequestDetails(state, action) {
         const newRequestDetail = action.payload;
         state.requestDetail = { ...newRequestDetail };
      },

      logout(state) {},
   },
});

export const userActions = userSlice.actions;

export default userSlice;
