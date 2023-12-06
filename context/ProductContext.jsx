// ProductContext.jsx
import React, { createContext, useContext, useState } from 'react';

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [comments, setComments] = useState([]);
  const products = [
    { id: 1, name: 'Товар 1', description: 'Це детальне опис товару 1.', price: 230 },
    { id: 2, name: 'Товар 2', description: 'Це детальне опис товару 2.', price: 300 },
    { id: 3, name: 'Товар 3', description: 'Це детальне опис товару 3.', price: 150 },
  ];
  const exchangeRate = 38;

  const handleProductSelect = (productId) => {
    setSelectedProduct(products.find((product) => product.id === productId));
  };

  const handleCommentAdd = (comment) => {
    setComments([...comments, comment]);
  };

  const convertPriceToUSD = () => {
    if (selectedProduct && !isNaN(selectedProduct.price) && !isNaN(exchangeRate)) {
      const priceInUSD = selectedProduct.price / exchangeRate;
      setSelectedProduct({ ...selectedProduct, priceInUSD: priceInUSD.toFixed(2) });
    }
  };

  return (
    <ProductContext.Provider
      value={{
        selectedProduct,
        setSelectedProduct,
        comments,
        handleProductSelect,
        handleCommentAdd,
        convertPriceToUSD,
        products,
        exchangeRate,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error('useProductContext must be used within a ProductProvider');
  }
  return context;
};
