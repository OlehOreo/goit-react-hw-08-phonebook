import { ContactsItem } from 'components/ContactsItem/ContactsItem';
import { List } from './ContactList.styled';

export const ContactList = ({ filteredContacts }) => {
  return (
    <List>
      {filteredContacts.map(contact => (
        <li key={contact.id}>
          <ContactsItem contact={contact} />
        </li>
      ))}
    </List>
  );
};
