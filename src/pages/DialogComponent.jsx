// YourDialogComponent.jsx
import React from 'react';
import { CSSTransition } from 'react-transition-group';
import '../css/WindowAnimation.css';

const DialogComponent = ({ isOpen, closeDialog }) => {
  return (
    <CSSTransition
      in={isOpen}
      timeout={500}
      classNames="dialog"
      unmountOnExit
    >
      <div className="your-dialog-styles">
      <h2>Важливе повідомлення</h2>
        <p>Тут могла бути ваша реклама!</p>
        <button onClick={closeDialog}>Close Dialog</button>
      </div>
    </CSSTransition>
  );
};

export default DialogComponent;
