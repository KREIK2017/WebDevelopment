import React, { useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import '../../css/AnimatedList.css'; // Стилі для анімації

const AnimatedList = () => {
  const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3']);
  const [newItem, setNewItem] = useState('');

  const addItem = () => {
    if (newItem.trim() !== '') {
      setItems([...items, newItem]);
      setNewItem('');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button onClick={addItem}>Add Item</button>

      <TransitionGroup>
        {items.map((item, index) => (
          <CSSTransition key={index} timeout={500} classNames="item">
            <div>{item}</div>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
};

export default AnimatedList;
