import { configureStore } from '@reduxjs/toolkit';
import bookSlice from './book/book-slice';
import userSlice from './user/user-slice';
const store = configureStore({
   reducer: {
      user: userSlice.reducer,
      book: bookSlice.reducer,
   },
});

export default store;
