import '../css/ProductPage.css';
import React, { useState, useEffect } from 'react';

function ProductPage({ product, comments, onCommentAdd, exchangeRate, convertPriceToUSD }) {
  const [newComment, setNewComment] = useState('');

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (newComment.trim() !== '') {
      onCommentAdd(newComment);
      setNewComment('');
      console.log(`Ваш відгук: "${newComment}" додано успішно!`);
      alert(`Ваш відгук: "${newComment}" додано успішно!`);
    }
  };

  useEffect(() => {
    if (exchangeRate && product && !isNaN(product.price) && !isNaN(exchangeRate)) {
      const priceInUSD = product.price / exchangeRate;
      convertPriceToUSD(priceInUSD.toFixed(2));
    }
  }, [product, exchangeRate, convertPriceToUSD]);

  if (!product) {
    // Додайте додаткову обробку, якщо product не визначено
    return <div>Товар не вибраний</div>;
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>

      <h2>Коментарі:</h2>
      <ul className='ul-comment'>
        {comments.map((comment, index) => (
          <li key={index}>{comment}</li>
        ))}
      </ul>

      <form onSubmit={handleCommentSubmit}>
        <textarea className='textarea'
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Введіть коментар..."
        />
        <button type="submit">Додати коментар</button>
      </form>

      <div className="price">
        <p>Ціна: {product.price} грн</p>
        {product.priceInUSD && <p>Ціна в доларах: {product.priceInUSD} USD</p>}
      </div>
    </div>
  );
}

export default ProductPage;
