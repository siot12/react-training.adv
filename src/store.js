import { configureStore } from '@reduxjs/toolkit';
import userReducer from './components/user/userSlice.js';

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});