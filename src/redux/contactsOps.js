import { createAsyncThunk } from '@reduxjs/toolkit';
import { getAllContacts } from '../api/contactsApi';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkApi) => {
    try {
      const data = await getAllContacts();
      console.log('data: ', data);

      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
