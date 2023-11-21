// App.js
import './css/App.css';
import { Header, Footer, Menu } from './pages/Home parts/components';
import { useState } from 'react';
import { UserProvider } from './context/UserContext';
import { ProductProvider } from './context/ProductContext';
function App() {
  const [isLogged, setIsLogged] = useState(false);
  
  return (
      <UserProvider>
        <ProductProvider> 
        <div className="app">
          <Header isLogged={isLogged} toggleLogin={() => setIsLogged((prevIsLogged) => !prevIsLogged)} />
          <Menu isLogged={isLogged} toggleLogin={() => setIsLogged((prevIsLogged) => !prevIsLogged)} />
          <Footer />
          
        </div>
        </ProductProvider> 
      </UserProvider>
  );
}

export default App;
