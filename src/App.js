// App.js
import './css/App.css';
import { Header, Body, Footer, Menu } from './pages/Home parts/components';
import { useState } from 'react';
import { UserProvider } from './context/UserContext';

function App() {
  const [isLogged, setIsLogged] = useState(false);
  return (
      <UserProvider>
        <div className="app">
          <Header isLogged={isLogged} toggleLogin={() => setIsLogged((prevIsLogged) => !prevIsLogged)} />
          <Menu isLogged={isLogged} toggleLogin={() => setIsLogged((prevIsLogged) => !prevIsLogged)} />
          <Body />
          <Footer />
        </div>
      </UserProvider>
  );
}

export default App;
