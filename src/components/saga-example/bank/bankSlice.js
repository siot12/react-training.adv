import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  transactions: [],
  isLoading: false,
  error: null,
  notification: { message: '', type: 'info' },
};

export const bankSlice = createSlice({
  name: 'bank',
  initialState,
  reducers: {
    transferRequested: (state, action) => {
      state.isLoading = true;
      state.error = null;
    },
    transferSuccess: (state, action) => {
      state.isLoading = false;
      state.transactions.push(action.payload);
    },

    transferFailed: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    showNotification: (state, action) => {
      state.notification = action.payload;
    },
  },
});

export const {
  transferRequested,
  transferSuccess,
  transferFailed,
  showNotification,
} = bankSlice.actions;

export default bankSlice.reducer;