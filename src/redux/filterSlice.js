import { createSlice } from '@reduxjs/toolkit';

export const getSearchResults = state => state.filter;

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    onSearchContact(_, action) {
      return action.payload;
    },
  },
});

export const filterReducer = filterSlice.reducer;
export const { onSearchContact } = filterSlice.actions;
