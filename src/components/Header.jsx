import React from 'react';
import "../css/Header.css";
function Header({ isLogged, toggleLogin }) {
  return (
    <header>
      <h1>Заголовок</h1>
        <button className='button-enter' onClick={toggleLogin}>
        {isLogged ? 'Вийти' : 'Увійти'}
        </button>
      
    </header>
  );
}

export default Header;
