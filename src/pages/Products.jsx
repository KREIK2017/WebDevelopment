// Products.jsx
import React from 'react';
import { ProductProvider, useProductContext } from '../context/ProductContext';
import ProductPage from './ProductPage';
import { UserProvider } from '../context/UserContext';

function Products() {
  const {
    selectedProduct,
    comments,
    handleProductSelect,
    handleCommentAdd,
    convertPriceToUSD,
    products,
    exchangeRate,
  } = useProductContext();

  return (
    <UserProvider>
    <ProductProvider>

    <div>
      <h2>Сторінка з продуктами</h2>
      <h1>Виберіть товар:</h1>
      <ul className="ul-product">
        {products.map((product) => (
          <li key={product.id}>
            <label>
              <input
                type="radio"
                name="product"
                value={product.id}
                checked={selectedProduct?.id === product.id}
                onChange={() => handleProductSelect(product.id)}
              />
              {product.name}
            </label>
          </li>
        ))}
      </ul>

      {selectedProduct && typeof selectedProduct === 'object' && (
        <ProductPage
          product={selectedProduct}
          comments={comments}
          onCommentAdd={handleCommentAdd}
          exchangeRate={exchangeRate}
          convertPriceToUSD={convertPriceToUSD}
        />
      )}
    </div>
    </ProductProvider>

    </UserProvider>

  );
}

export default Products;
