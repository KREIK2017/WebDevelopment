function Menu() {
  return (
    <>
      <div className="menu">


        <ul className="ul-menu">
          <li>
            <a href="/">Головна</a>
          </li>
          <li>
            <a href="/products">Товари</a>
          </li>
          <li>
            <a href="/about">Про нас</a>
          </li>
          {/* Додайте інші пункти меню за потребою */}
        </ul>
      </div>
    </>
  );
}

export default Menu;