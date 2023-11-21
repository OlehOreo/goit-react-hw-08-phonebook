import { ContactList } from 'components/ContactList/ContactList';
import Loading from 'components/Loading/Loading';
import { Message } from 'components/Notiflix/Message';
import { useEffect, useState } from 'react';

import { useSelector } from 'react-redux';

import {
  selectorContacts,
  selectorError,
  selectorLoading,
} from 'redux/contactsSlice';
import { getSearchResults } from 'redux/filterSlice';

export const Contacts = () => {
  const [contactLoaded, setContactLoaded] = useState(false);

  const contacts = useSelector(selectorContacts);
  const loading = useSelector(selectorLoading);
  const filter = useSelector(getSearchResults);
  const error = useSelector(selectorError);

  useEffect(() => {
    if (contacts.length !== 0) {
      setContactLoaded(true);
    }
  }, [contacts]);
  const filteredContacts = contacts.filter(({ name, phone }) => {
    if (filter.length > 0) {
      return (
        name.toLowerCase().includes(filter.toLowerCase()) ||
        phone.replace(/\D/g, '').includes(filter)
      );
    }

    return contacts;
  });

  return (
    <>
      {loading && (
        <Loading
          style={{
            display: 'flex',
            justifyContent: 'center',
          }}
        />
      )}
      {contacts.length !== 0 && (
        <>
          <ContactList filteredContacts={filteredContacts} />
          {filteredContacts.length === 0 && (
            <Message info={'contact not found'} contact={filter} />
          )}
        </>
      )}
      {contacts.length === 0 && contactLoaded === true && (
        <Message info={'No contacts add a contact'} />
      )}
      {error && <Message info={'Something went wrong, reload the page'} />}
    </>
  );
};
