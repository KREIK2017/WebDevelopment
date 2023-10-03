import React from 'react';

function Header({ isLogged, toggleLogin }) {
  return (
    <header>
      <h1>Заголовок</h1>
      <button onClick={toggleLogin}>
        {isLogged ? 'Вийти' : 'Увійти'}
      </button>
    </header>
  );
}

export default Header;
