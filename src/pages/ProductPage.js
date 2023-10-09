import '../css/ProductPage.css';

import React, { useState } from 'react';

function ProductPage(props) {
  const { product, exchangeRate } = props;
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [convertedPrice, setConvertedPrice] = useState(null); // Стан для зберігання ціни в доларах

  const addComment = (event) => {
    event.preventDefault();
    if (newComment.trim() !== '') {
      setComments([...comments, newComment]);
      setNewComment('');
      console.log(`Ваш відгук: "${newComment}" додано успішно!`);
      alert(`Ваш відгук: "${newComment}" додано успішно!`);
    }
  };

  // Функція для конвертації ціни валюти в гривні в ціну в доларах
  const convertPriceToUSD = () => {
    if (!isNaN(product.price) && !isNaN(exchangeRate)) {
      const priceInUSD = product.price / exchangeRate;
      setConvertedPrice(priceInUSD.toFixed(2)); // Округлення до двох знаків після коми
    }
  };

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>

      <h2>Коментарі:</h2>
      <ul className="ul-comment">
        {comments.map((comment, index) => (
          <li key={index}>{comment}</li>
        ))}
      </ul>

      <form onSubmit={addComment}>
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Введіть коментар..."
        />
        <button type="submit">Додати коментар</button>
      </form>

      <div className="price">
        <p>Ціна: {product.price} грн</p>
        <p>Ціна в доларах: {convertedPrice} USD</p>
        <button onClick={convertPriceToUSD}>Конвертувати в USD</button>
      </div>
    </div>
  );
}

export default ProductPage;
