import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';

import * as Yup from 'yup';
import {
  Btn,
  ErrMessage,
  FieldName,
  StyledField,
  StyledForm,
} from './LoginForm.styled';

const initialValues = {
  email: '',
  password: '',
};

const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email address')
    .required('This field is required!'),
  password: Yup.string()
    .min(6, 'This field must be filled')
    .required('Password is required!'),
});
export default function LoginForm() {
  const dispatch = useDispatch();
  const handlerLogin = (user, form) => {
    dispatch(logIn(user));
    form.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={loginSchema}
      onSubmit={handlerLogin}
    >
      <StyledForm>
        <label>
          <FieldName>Email</FieldName> <StyledField type="email" name="email" />
          <ErrMessage name="email" component="span" />
        </label>
        <label>
          <FieldName>Password</FieldName>
          <StyledField type="password" name="password" />
          <ErrMessage name="password" component="span" />
        </label>
        <Btn type="submit">Log In</Btn>
      </StyledForm>
    </Formik>
  );
}
