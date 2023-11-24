import { instance } from 'redux/auth/operations';

export async function getContacts() {
  const { data } = await instance.get('/contacts');
  return data;
}

export async function postContact(contactData) {
  const { data } = await instance.post('/contacts', contactData);

  return data;
}

export async function fetchDeleteContact(contactId) {
  const { data } = await instance.delete(`/contacts/${contactId}`);
  return data;
}
