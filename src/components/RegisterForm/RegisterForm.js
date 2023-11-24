import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';

import { register } from 'redux/auth/operations';
import {
  Btn,
  ErrMessage,
  FieldName,
  StyledField,
  StyledForm,
} from './RegisterForm.styled';

const initialValues = {
  name: '',
  email: '',
  password: '',
};

const loginSchema = Yup.object().shape({
  name: Yup.string()
    .lowercase()
    .min(3, 'Too short!')
    .required('Username is required!'),
  email: Yup.string()
    .email('Invalid email address')
    .required('This field is required!'),
  password: Yup.string()
    .min(7, 'This field must be filled')
    .required('Password is required!'),
});

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handlerRegister = (user, form) => {
    // { name, email, password }
    dispatch(register(user));
    form.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={loginSchema}
      onSubmit={handlerRegister}
    >
      <StyledForm>
        <label>
          <FieldName>Username</FieldName>{' '}
          <StyledField type="text" name="name" />
          <ErrMessage name="name" component="span" />
        </label>
        <label>
          <FieldName>Email</FieldName> <StyledField type="email" name="email" />
          <ErrMessage name="email" component="span" />
        </label>
        <label>
          <FieldName>Password</FieldName>
          <StyledField type="password" name="password" />
          <ErrMessage name="password" component="span" />
        </label>
        <Btn type="submit">Register</Btn>
      </StyledForm>
    </Formik>
  );
};
