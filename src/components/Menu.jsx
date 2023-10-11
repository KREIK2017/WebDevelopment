function Menu({ isLogged, toggleLogin }) {
  return (
    <>
      <div className="menu">


        <ul className="ul-menu">
          <li>
            <a href="/">Головна</a>
          </li>
          <li>
            <a href="/product">Товари</a>
          </li>
          <li>
            <a href="/about">Про нас</a>
          </li>
          <li onClick={toggleLogin}>
          {isLogged ? 'Вийти' : 'Увійти'}
          </li>
          {/* Додайте інші пункти меню за потребою */}
        </ul>
      </div>
    </>
  );
}

export default Menu;