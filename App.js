// App.js
import './css/App.css';
import { Header, Footer, Menu } from './pages/Home parts/components';
import { useState } from 'react';
import { UserProvider } from './context/UserContext';
import { ProductProvider } from './context/ProductContext';
import CommentForm from './pages/lr8/CommentForm';
import ProductForm from './pages/lr8/ProductForm';
import RegistrationForm from './pages/lr8/RegistrationForm';
import NumberValidation from './pages/lr8/NumberValidation';
function App() {
  const [isLogged, setIsLogged] = useState(false);
  
  return (
      <UserProvider>
        <ProductProvider> 
        <div className="app">
          <Header isLogged={isLogged} toggleLogin={() => setIsLogged((prevIsLogged) => !prevIsLogged)} />
          <Menu isLogged={isLogged} toggleLogin={() => setIsLogged((prevIsLogged) => !prevIsLogged)} />
          <NumberValidation/>
          <RegistrationForm/>
         
          <ProductForm/>
          <CommentForm/>
          <Footer />
          
        </div>
        </ProductProvider> 
      </UserProvider>
  );
}

export default App;
