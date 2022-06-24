import { createSlice } from '@reduxjs/toolkit';
const initialState = {
   userData: {},
   filteredBook: {},
   userLibrarie: [],
   enxchangeNotification: [],
   creditNotification: [],
   notificationInfo: [],
   creditNotificationInfo: [],
   requestDetail: {},
   creditRequestDetail: {},
   bookHistory: [],
   creditHistory: [],
   filteredHistory: {},
   filtereCreditdHistory: {},
   userCredits: 0,
   wishlist: [],
};
const userSlice = createSlice({
   name: 'user',
   initialState: initialState,
   reducers: {
      getUserData(state, action) {
         const newUserData = action.payload;
         state.userData = { ...newUserData };
      },

      getUserWishlist(state, action) {
         state.wishlist = [...action.payload];
      },

      getFilteredHistory(state, action) {
         const newFilteredHistory = action.payload;
         state.filteredHistory = { ...newFilteredHistory };
      },

      getFilteredCreditHistory(state, action) {
         const newFilteredHistory = action.payload;
         state.filtereCreditdHistory = { ...newFilteredHistory };
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
         if (!newAddress.streetName == '') {
            state.userData.streetName = newAddress.streetName;
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

      getEnxchangeNotification(state, action) {
         const newNotification = state.enxchangeNotification.find(
            (item) => item.tradeId === action.payload.tradeId
         );
         if (!newNotification) {
            state.enxchangeNotification = [...action.payload];
         }
      },
      getCreditNotification(state, action) {
         const newNotification = state.creditNotification.find(
            (item) => item.tradeId === action.payload.tradeId
         );
         if (!newNotification) {
            state.creditNotification = [...action.payload];
         }
      },

      getNotificationInfo(state, action) {
         const newNotificationInfo = state.notificationInfo.find(
            (item) => item.tradeId === action.payload.tradeId
         );
         if (!newNotificationInfo) {
            state.notificationInfo = [...action.payload];
         }
      },
      getCreditNotificationInfo(state, action) {
         const newCreditNotificationInfo = state.creditNotificationInfo.find(
            (item) => item.tradeId === action.payload.tradeId
         );
         if (!newCreditNotificationInfo) {
            state.creditNotificationInfo = [...action.payload];
         }
      },

      getUserRequestDetails(state, action) {
         const newRequestDetail = action.payload;
         state.requestDetail = { ...newRequestDetail };
      },

      getCreditRequestDetails(state, action) {
         const newCreditRequest = action.payload;
         state.creditRequestDetail = { ...newCreditRequest };
      },

      getUserBookHistory(state, action) {
         state.bookHistory = [...action.payload];
      },

      getUserCreditHistory(state, action) {
         state.creditHistory = [...action.payload];
      },

      getUserCredits(state, action) {
         state.userCredits = action.payload;
      },

      logout(state) {},
   },
});

export const userActions = userSlice.actions;

export default userSlice;
