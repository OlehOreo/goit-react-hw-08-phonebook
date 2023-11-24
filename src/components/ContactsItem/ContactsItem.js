import { useDispatch } from 'react-redux';

import { Wrapper, Phone, BtnDelete, ContactInfo } from './ContactsItem.styled';
import { deleteContact } from 'redux/contactOperations';
import NotiflixConfig from 'components/Notiflix/NotiflixConfig';

export const ContactsItem = ({ contact: { name, number, id } }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteContact(id));
    NotiflixConfig.Notify.warning(
      `Contact <span style="color: #babffff5;">${name}</span> has been deleted `
    );
  };

  return (
    <Wrapper>
      <ContactInfo>
        {name} : <Phone> {number}</Phone>
      </ContactInfo>
      <BtnDelete type="button" onClick={handleDelete}>
        Delete
      </BtnDelete>
    </Wrapper>
  );
};
