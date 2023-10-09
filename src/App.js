import './css/App.css';
import { useState, useCallback } from 'react';
import { Header, Body, Footer, Menu } from './components/components';
import ProductPage from './pages/ProductPage';

function App() {

  const [items, setItems] = useState([
    { id: 1, name: 'Товар 1', isChecked: false },
    { id: 2, name: 'Товар 2', isChecked: false },
    { id: 3, name: 'Товар 3', isChecked: false },
  ]);

  const product = {
    name: 'Товар 1',
    description: 'Це детальний опис товару номер 1.',
    price:'230',
  };
  const exchangeRate = 38;
  const [isLogged, setIsLogged] = useState(false);

  // Функція для зміни стану елемента при виборі чекбоксу

  const handleCheckboxChange = (itemId) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, isChecked: !item.isChecked } : item
      )
    );
  };

  // Функція для підрахунку кількості обраних товарів
  
  const calculateSelectedProductCount = useCallback(() => {
    return items.filter((item) => item.isChecked).length;
  }, [items]);

  // Функція для зміни стану входу/виходу
  const toggleLogin = () => {
    setIsLogged((prevIsLogged) => !prevIsLogged);
  };


  return (
    <div className="app">
      <Header isLogged={isLogged} toggleLogin={toggleLogin} />
      <Menu isLogged={isLogged} toggleLogin={toggleLogin} />
      <Body />
      
  
      <ul className='ul-product'>
        {items.map((item) => (
          <li key={item.id}>
            <input
              type="checkbox"
              checked={item.isChecked}
              onChange={() => handleCheckboxChange(item.id)}
            />
            {item.name}
          </li>
        ))}
      </ul>
      <ProductPage product={product} exchangeRate={exchangeRate}/>
      <Footer selectedProductCount={calculateSelectedProductCount()} />
      
    </div>
    
  );
}

export default App;
