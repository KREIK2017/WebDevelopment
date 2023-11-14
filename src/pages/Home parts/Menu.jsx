import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Home, Products, About,Debug } from '../pages';
import NavigationHistory from '../../context/NavigationHistory';

function Menu({ isLogged, toggleLogin }) {
  return (
    <>
      <Router>
        <div className="menu">
          <ul className="ul-menu">
            <li>
              <Link to="/">Головна</Link>
            </li>
            <li>
              <Link to="/products">Товари</Link>
            </li>
            <li>
              <Link to="/about">Про нас</Link>
            </li>
            <li>
              <Link to="/debug">Debug</Link>
            </li>
            <li onClick={toggleLogin}>
              {isLogged ? 'Вийти' : 'Увійти'}
            </li>
            {/* Додайте інші пункти меню за потребою */}
          </ul>
          <NavigationHistory>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/about" element={<About />} />
            <Route path="/debug" element={<Debug />}></Route>

          </Routes>
          </NavigationHistory>
        </div>
      </Router>
    </>
  );
}

export default Menu;
