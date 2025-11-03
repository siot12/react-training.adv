import { createSlice } from '@reduxjs/toolkit';

const initialPermissions = [
  'ACCESS_USERS',
  'ACCESS_ALBUMS',
  //'ACCESS_PHOTOS',
  //'ACCESS_TODOS',
  //'ACCESS_POSTS',
  //'ACCESS_COMMENTS',
];

export const permissionsSlice = createSlice({
  name: 'permissions',
  initialState: initialPermissions,
  reducers: {
    setPermissions: (state, action) => {
      state.list = action.payload;
    },
  },
});

export const { setPermissions } = permissionsSlice.actions;
export default  permissionsSlice.reducer;