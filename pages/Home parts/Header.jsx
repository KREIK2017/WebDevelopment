// Header.jsx
import React from 'react';
import { useUserContext } from '../../context/UserContext';

function Header({ isLogged, toggleLogin }) {
  const { user, logout } = useUserContext();

  // Решта вашого коду для компонента Header

  return (
    <div>
      {/* Решта вашого JSX для компонента Header */}
      {user ? (
        <div>
          <p>Вітаємо, {user.username}!</p>
          <button onClick={logout}>Вийти</button>
        </div>
      ) : (
        <button onClick={toggleLogin}>Увійти</button>
      )}
    </div>
  );
}

export default Header;
