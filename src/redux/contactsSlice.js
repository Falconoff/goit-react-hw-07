import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts } from './contactsOps';
// import { fetchContacts } from '../redux/contactsOps';

const INITIAL_STATE = {
  items: [],
  loading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: INITIAL_STATE,
  extraReducers: builder =>
    builder
      .addCase(fetchContacts.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      }),

  // reducers: {
  //   addContact: (state, action) => {
  //     state.items.push(action.payload);
  //   },

  //   deleteContact: (state, action) => {
  //     state.items = state.items.filter(item => item.id !== action.payload);
  //   },

  //   fetchContacts: state => {},
  // },
});

export const selectContacts = state => state.contacts.items;
export const selectLoading = state => state.contacts.loading;
export const selectError = state => state.contacts.error;

export const { addContact, deleteContact } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;
