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
import Navbar from './components/Navbar';
import RegisterUser from './components/RegisterUser';
import Apropos from './components/Apropos';
import Admin from "./components/Admin";
import AddProduct from "./components/AddProduct";
import EditProduct from "./components/EditProduct"
import Categories from './components/Categories';
import AddCat from './components/AddCat';


function App() {
  return (
    <BrowserRouter>
      <PayPalScriptProvider options={{ "client-id": "AUGBEurHYAYgL-fNwZX8bA60QtYNAPPpoRw0KDmNFfpc6rEEsVL-ERZqkupmDF7fRonMmTYY8HWRidyp" }}>

        <Navbar />
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Product />} />
          <Route path="/productOne" element={<ProductOne />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/payement" element={<Payement />} />
          <Route path="/register" element={<RegisterUser />} />
          <Route path="/about" element={<Apropos />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/addProduct" element={<AddProduct />} />
          <Route path="/editProduct" element={<EditProduct />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/addCat" element={<AddCat />} />
          <Route path="/editCat" element={<AddCat />} />
        </Routes>
      </PayPalScriptProvider>
    </BrowserRouter>
  );
}

export default App;
