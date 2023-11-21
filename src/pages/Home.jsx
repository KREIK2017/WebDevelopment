// Home.jsx
import { useState } from 'react';

import React from 'react';
import Body from './Home parts/Body';
import { AnimatedList } from './pages';
import AuthModal from './Auth/AuthModal';

function Home() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    
    <div>
      <h2>Головна сторінка</h2>
      
      <Body />
      <div>
      <button onClick={showModal}>Відкрити вікно авторизації</button>
      <AuthModal visible={isModalVisible} onClose={handleCancel} />
      </div>
      <h1>Animated List</h1>
      <AnimatedList />
    </div>
  );
}

export default Home;
