import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import '../../css/CommentForm.css';

const CommentForm = () => {
  const [comments, setComments] = useState([]); // Додано стан для збереження коментарів

  const handleSubmit = (values, { resetForm }) => {
    setComments((prevComments) => [...prevComments, values]); // Додаємо новий коментар до стану
    resetForm();
  };

  return (
    <div>
      
      <h3>Додати Коментар</h3>
      <Formik initialValues={{ name: '', comment: '' }} onSubmit={handleSubmit}>
        <Form className="form-container">
          <label htmlFor="name" className="form-label">Ім'я:</label>
          <Field type="text" id="name" name="name" className="form-input" />
          <ErrorMessage name="name" component="div" className="form-error" />

          <label htmlFor="comment" className="form-label">Коментар:</label>
          <Field as="textarea" id="comment" name="comment" className="form-input" />
          <ErrorMessage name="comment" component="div" className="form-error" />

          <button type="submit" className="form-button">Додати коментар</button>
        </Form>
      </Formik>
      <h3>Коментарі</h3>
      <ul className='form-ul'>
        {comments.map((comment, index) => (
          <li key={index}><p> <strong>{comment.name}</strong> залишив коментар : "{comment.comment}" </p></li>
        ))}
      </ul>
    </div>
  );
};

export default CommentForm;
