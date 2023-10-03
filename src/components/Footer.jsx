import React from 'react';

function Footer({ selectedProductCount }) {
  return (
    <footer>
      <p>Кількість обраних товарів: {selectedProductCount}</p>
    </footer>
  );
}

export default Footer;
