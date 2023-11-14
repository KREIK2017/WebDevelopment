// Debug.jsx
import React, { useContext } from 'react';
import { HistoryContext } from '../context/NavigationHistory';

export default function Debug() {
  const context = useContext(HistoryContext);

  console.log(context);

  if (!context) {
    console.error("Context is undefined. Check your context provider.");
    return null;
  }

  const { history } = context;

  return (
    <div>
      <h2>Історія перебування користувача</h2>
      <ol>
        {history.map((path, index) => (
          <li key={index}>{path}</li>
        ))}
      </ol>
    </div>
  );
}
