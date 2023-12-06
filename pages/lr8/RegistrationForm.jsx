// RegistrationForm.js
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import '../../css/CommentForm.css';

const RegistrationForm = () => {
  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  };

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().min(3, 'Ім\'я повинно містити принаймні 3 символи').required('Це поле є обов\'язковим'),
    lastName: Yup.string().max(40, 'Прізвище не може бути більше 40 символів').required('Це поле є обов\'язковим'),
    email: Yup.string().email('Введіть коректну електронну пошту').required('Це поле є обов\'язковим'),
    password: Yup.string()
      .matches(/[A-Z]/, 'Пароль повинен містити принаймні одну велику літеру')
      .matches(/[^A-Za-z0-9]/, 'Пароль повинен містити принаймні один символ, відмінний від букви та цифри')
      .required('Це поле є обов\'язковим'),
  });

  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
  };

  return (
    <div>
            <h3>Реєстрація</h3>

    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
      <Form className="form-container">
        <label htmlFor="firstName"  className="form-label">Ім'я:</label>
        <Field type="text" id="firstName" name="firstName" className="form-input"  />
        <ErrorMessage name="firstName" component="div" className="form-error" />

        <label htmlFor="lastName"  className="form-label">Прізвище:</label>
        <Field type="text" id="lastName" name="lastName" className="form-input" />
        <ErrorMessage name="lastName" component="div" className="form-error"/>

        <label htmlFor="email"  className="form-label">Електронна пошта:</label>
        <Field type="email" id="email" name="email" className="form-input" />
        <ErrorMessage name="email" component="div" className="form-error"/>

        <label htmlFor="password"  className="form-label">Пароль:</label>
        <Field type="password" id="password" name="password" className="form-input" />
        <ErrorMessage name="password" component="div" className="form-error"/>

        <button type="submit" className="form-button">Зареєструватися</button>
      </Form>
    </Formik>
    </div>
  );
};

export default RegistrationForm;
