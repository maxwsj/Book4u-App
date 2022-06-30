import { configureStore, combineReducers } from '@reduxjs/toolkit';
import bookSlice from './book/book-slice';
import userSlice from './user/user-slice';
import externalUserSlice from './externalUser/externalUser-slice';

const combinedReducer = combineReducers({
   user: userSlice.reducer,
   book: bookSlice.reducer,
   externalUser: externalUserSlice.reducer,
});

const rootReducer = (state, action) => {
   if (action.type === 'user/logout') {
      state = undefined;
   }
   return combinedReducer(state, action);
};

const store = configureStore({
   reducer: rootReducer,
});

export default store;

// const store = configureStore({
//    reducer: {
//       user: userSlice.reducer,
//       book: bookSlice.reducer,
//    },
// });

// export default store;
