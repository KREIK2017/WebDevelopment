import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import '../../css/CommentForm.css';
import CustomInput from './CustomInput';

const ProductForm = () => {
  const [products, setProducts] = useState([]); // Додано стан для збереження товарів

  const handleSubmit = (values, { resetForm }) => {
    setProducts((prevProducts) => [...prevProducts, values]); // Додаємо новий товар до стану
    resetForm();
  };

  return (
    <div>
            <h3>Додати Товар</h3>

      <Formik
        initialValues={{ productName: '', price: '', description: '' }}
        onSubmit={handleSubmit}
      >
        <Form className="form-container">
        <CustomInput label="Назва товару:" type="text" id="productName" name="productName" />
          <CustomInput label="Ціна:" type="text" id="price" name="price" />
          <CustomInput label="Опис:" as="textarea" id="description" name="description" />
          
          <button type="submit" className="form-button">Додати товар</button>
        </Form>
      </Formik>
      <h3>Товари</h3>
      <ul className='form-ul'>
        {products.map((product, index) => (
          <li key={index}>
            <p><strong>{product.productName}</strong> - {product.price} грн <br/> "{product.description}"</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductForm;
