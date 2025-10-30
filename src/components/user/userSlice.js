import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: 'John Doe',
  email: 'john.doe@bank.com',
  notifications: {
    email: true,
    sms: false,
  },
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    toggleEmailNotifications: (state) => {
      state.notifications.email = !state.notifications.email;
    },
  },
});

export const { toggleEmailNotifications } = userSlice.actions;
export default userSlice.reducer;