import axios from 'axios';

axios.defaults.baseURL = 'https://6557470bbd4bcef8b6125eb7.mockapi.io';

export async function getContacts() {
  const { data } = await axios.get('/contacts');
  return data;
}

export async function postContact(contactData) {
  const { data } = await axios.post('/contacts', contactData);
  return data;
}

export async function fetchDeleteContact(contactId) {
  const { data } = await axios.delete(`/contacts/${contactId}`);
  return data;
}
