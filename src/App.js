import './css/App.css';
import { useState } from 'react';
import { Header, Body, Footer, Menu } from './components/components';
import ProductPage from './pages/ProductPage';

function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [comments, setComments] = useState([]);
  const products = [
    { id: 1, name: 'Товар 1', description: 'Це детальне опис товару 1.', price: 230 },
    { id: 2, name: 'Товар 2', description: 'Це детальне опис товару 2.', price: 300 },
    { id: 3, name: 'Товар 3', description: 'Це детальне опис товару 3.', price: 150 },
  ];

  const exchangeRate = 38;
  const [isLogged, setIsLogged] = useState(false);

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
    <div className="app">
      <Header isLogged={isLogged} toggleLogin={() => setIsLogged((prevIsLogged) => !prevIsLogged)} />
      <Menu isLogged={isLogged} toggleLogin={() => setIsLogged((prevIsLogged) => !prevIsLogged)} />
      <Body />

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

      {selectedProduct && (
        <ProductPage
          product={selectedProduct}
          comments={comments}
          onCommentAdd={handleCommentAdd}
          exchangeRate={exchangeRate}
          convertPriceToUSD={convertPriceToUSD}
        />
      )}

      <Footer />
    </div>
  );
}

export default App;
