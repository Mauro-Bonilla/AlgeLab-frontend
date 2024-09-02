
import { configureStore, createSlice } from '@reduxjs/toolkit';

const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    mode: 'light',
    primaryColor: '#D82530',
  },
  reducers: {
    setMode: (state, action) => {
      state.mode = action.payload;
    },
    setPrimaryColor: (state, action) => {
      state.primaryColor = action.payload;
    },
  },
});

export const { setMode, setPrimaryColor } = themeSlice.actions;

const store = configureStore({
  reducer: {
    theme: themeSlice.reducer,
  },
});

export default store;