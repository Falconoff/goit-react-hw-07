import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
// import { getAllContacts } from '../api/contactsApi';

axios.defaults.baseURL = 'https://626a414a53916a0fbdf7e48a.mockapi.io';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
      // console.log('response: ', response);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (newContact, thunkAPI) => {
    try {
      const response = await axios.post('/contacts', newContact);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'tasks/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${contactId}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
// ============
// async (_, thunkApi) => {
//   try {
//     // const data = await getAllContacts();
//     const data = await axios.get(
//       'https://626a414a53916a0fbdf7e48a.mockapi.io/contacts'
//     );
//     console.log('data: ', data);

//     return data;
//   } catch (error) {
//     return thunkApi.rejectWithValue(error.message);
//   }
// }

// ===========
// () => {
//   return [
//     {
//       createdAt: '2022-08-29T21:41:50.673Z',
//       name: 'Vladimir Zelensky',
//       number: '333-33-33',
//       id: '7',
//     },
//     {
//       createdAt: '2022-08-29T19:25:47.861Z',
//       name: 'Boris Johnson',
//       number: '444-44-44',
//       id: '8',
//     },
//     {
//       createdAt: '2022-12-02T23:23:38.367Z',
//       name: 'Petro Poroshenko',
//       number: '+3123123 1',
//       id: '9',
//     },
//     {
//       createdAt: '2024-11-03T18:51:11.453Z',
//       name: 'Ms. Peter Hintz',
//       number: '227-894-7463',
//       id: '10',
//     },
//   ];
// }

// );
