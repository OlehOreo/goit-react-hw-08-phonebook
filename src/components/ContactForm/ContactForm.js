import { Formik } from 'formik';
import * as Yup from 'yup';
import Inputmask from 'inputmask';

import {
  BtnAddContact,
  ErrMessage,
  StyledForm,
  StyledField,
  FieldName,
} from './ContactForm.styled';

import { useDispatch, useSelector } from 'react-redux';
import { selectorContacts } from 'redux/contactsSlice';
import NotiflixConfig from 'components/Notiflix/NotiflixConfig';
import { useEffect } from 'react';
import { addContact } from 'redux/contactOperations';

const contactSchema = Yup.object().shape({
  name: Yup.string()
    .lowercase()
    .min(3, 'Too short!')
    .required('This field is required!'),
  number: Yup.string()
    .transform((value, originalValue) => {
      return value.replace(/\D/g, '');
    })

    .min(12, 'This field must be filled')
    .required('This field is required!'),
});

const initialValues = {
  name: '',
  number: '',
};

export const ContactForm = () => {
  useEffect(() => {
    const inputs = document.querySelector('input[type=tel]');
    let im = new Inputmask('+38 (099) 999-99-99');
    im.mask(inputs);
  }, []);

  const dispatch = useDispatch();
  const contacts = useSelector(selectorContacts);
 

  const handlerAddContact = (fieldValue, form) => {
   
    const contactCheck = contacts.find(contact => {
      return (
        contact.name.toLocaleLowerCase() ===
          fieldValue.name.toLocaleLowerCase() ||
        contact.number === fieldValue.number
      );
    });

    if (contactCheck === undefined) {
      dispatch(addContact(fieldValue));
      form.resetForm();
      NotiflixConfig.Notify.success(
        `<span style="color: #babffff5;">${fieldValue.name}</span> add to contacts`
      );
    } else if (contactCheck.name === fieldValue.name) {
      return NotiflixConfig.Notify.warning(
        `<span style="color: #babffff5;">${fieldValue.name}</span>  is already in contacts`
      );
    } else if (contactCheck.number === fieldValue.number) {
      return NotiflixConfig.Notify.warning(
        `The number <span style="color: #babffff5;">${fieldValue.name}</span>  is already in contacts ${contactCheck.name}`
      );
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={contactSchema}
      onSubmit={handlerAddContact}
    >
      <StyledForm>
        <label>
          <FieldName>Name</FieldName>
          <StyledField id="name" name="name" placeholder="Rosie Simpson" />
          <ErrMessage name="name" component="div" />
        </label>
        <label>
          <FieldName>Number</FieldName>
          <StyledField
            name="number"
            type="tel"
            placeholder="+38 (099) 999-99-99"
          />
          <ErrMessage name="number" component="div" />
        </label>

        <BtnAddContact type="submit">Add contact</BtnAddContact>
      </StyledForm>
    </Formik>
  );
};
