// NumberValidation.js
import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const NumberValidation = () => {
  const initialValues = {
    number: 0,
  };

  const validationSchema = Yup.object().shape({
    number: Yup.number()
      .typeError('Введіть числове значення')
      .min(10, 'Число повинно бути не менше 10')
      .max(100, 'Число повинно бути не більше 100'),
  });

  const [submittedNumber, setSubmittedNumber] = useState(null);

  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    setSubmittedNumber(values.number);
    resetForm();
  };

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
      <Form>
        <label htmlFor="number">Число:</label>
        <Field type="number" id="number" name="number" />
        <div className="error-message">
          <ErrorMessage name="number" />
        </div>

        <button type="submit">Відправити</button>

        {submittedNumber !== null && (
          <div className="submitted-message">
            Ви ввели число: {submittedNumber}
          </div>
        )}
      </Form>
    </Formik>
  );
};

export default NumberValidation;
