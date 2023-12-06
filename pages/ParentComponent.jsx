// ParentComponent.jsx
import React, { useState } from 'react';
import DialogComponent from './DialogComponent';

const ParentComponent = () => {
  const [isDialogOpen, setDialogOpen] = useState(false);

  const openDialog = () => {
    setDialogOpen(true);
  };

  const closeDialog = () => {
    setDialogOpen(false);
  };

  return (
    <div>
      <button onClick={openDialog}>Open Dialog</button>
      <DialogComponent isOpen={isDialogOpen} closeDialog={closeDialog} />
    </div>
  );
};

export default ParentComponent;
