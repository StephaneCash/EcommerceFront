import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Product from './components/Product';
import { BrowserRouter } from 'react-router-dom';
import ProductOne from './components/ProductOne';
import Cart from './components/Cart';
import { PayPalScriptProvider } from "@paypal/react-paypal-js"
import Payement from './components/Payement';
import 'react-notifications/lib/notifications.css';
import Login from './components/Login';
import RegisterUser from './components/RegisterUser';


function App() {
  return (
    <BrowserRouter>
      <PayPalScriptProvider options={{ "client-id": "AUGBEurHYAYgL-fNwZX8bA60QtYNAPPpoRw0KDmNFfpc6rEEsVL-ERZqkupmDF7fRonMmTYY8HWRidyp" }}>    
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Product />} />
          <Route path="/productOne" element={<ProductOne />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/payement" element={<Payement />} />
          <Route path="/register" element={<RegisterUser />} />
        </Routes>
      </PayPalScriptProvider>
    </BrowserRouter>
  );
}

export default App;
