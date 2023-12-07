// ExampleComponent.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, addToShoppingList, removeFromShoppingList, selectCount, selectShoppingList } from './counterSlice';

const ExampleComponent = () => {
  const count = useSelector(selectCount);
  const shoppingList = useSelector(selectShoppingList);
  const dispatch = useDispatch();

  const handleAddToShoppingList = () => {
    dispatch(addToShoppingList('New Item'));
  };

  const handleRemoveFromShoppingList = () => {
    if (shoppingList.length > 0) {
      dispatch(removeFromShoppingList(shoppingList[0]));
    }
  };

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>

      <h2>Shopping List:</h2>
      <ul>
        {shoppingList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <button onClick={handleAddToShoppingList}>Add to Shopping List</button>
      <button onClick={handleRemoveFromShoppingList}>Remove from Shopping List</button>
    </div>
  );
};

export default ExampleComponent;
