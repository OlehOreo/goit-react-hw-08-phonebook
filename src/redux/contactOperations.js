import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  fetchDeleteContact,
  getContacts,
  postContact,
} from 'services/contacts-api';

export const fetchContacts = createAsyncThunk(
  'contact/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const contacts = await getContacts();
      return contacts;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contact/addContact',
  async (data, { rejectWithValue }) => {
    try {
      const contact = await postContact(data);
      return contact;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contact/deleteContact',
  async (data, { rejectWithValue }) => {
    try {
      const contact = await fetchDeleteContact(data);
      return contact.id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
