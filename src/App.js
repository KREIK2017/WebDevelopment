import './App.css';
import { useState } from 'react';
import { Header, Body, Footer, Menu } from './components/components';

function App() {

  const [items, setItems] = useState([
    { id: 1, name: 'Товар 1', isChecked: false },
    { id: 2, name: 'Товар 2', isChecked: false },
    { id: 3, name: 'Товар 3', isChecked: false },
    // Додайте інші товари сюди
  ]);

  // Функція для зміни стану елемента при виборі чекбоксу
  const handleCheckboxChange = (itemId) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, isChecked: !item.isChecked } : item
      )
    );
  };


  return (
    <div className="app">
      <Header />
      <Menu />
      <Body />
      <Footer />

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
    </div>
  );
}

export default App;
