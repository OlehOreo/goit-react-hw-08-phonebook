import { ContactForm } from 'components/ContactForm/ContactForm';
import { Contacts } from 'components/Contacts/Contacts';
import { Filter } from 'components/Filter/Filter';

const ContactsPage = () => {
  return (
    <main>
      <ContactForm />
      <Filter />
      <Contacts />
    </main>
  );
};
export default ContactsPage;
