import ReactDOM from "react-dom";
import React, {useState} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import NameForm from "./pages/Form";
import Purchase from "./pages/Purchase";
import Profile from "./pages/Profile";
import Checkout from "./pages/Checkout";
import Cart from "./pages/Cart";
import NewProfile from "./pages/Create";
import Edit from "./pages/Edit";
import Forget from "./pages/Forget";
import NoPage from "./pages/NoPage";

import './App.css';

export default function App() {

  const [namer, setNamer] = useState('');
  const [cartItems, setCartItems] = useState([]);
  const handleChange = (e) => {
    console.log(e.target.value);
    setNamer(e.target.value);
  
    
  };
  

  return (
    <BrowserRouter>
      <Routes>
      <Route index element={<NameForm />} />
      <Route path="registration" element={<NameForm handleChange={(e)=>handleChange(e)}/>} />
      <Route path="create" element={<NewProfile />} />
      <Route path="forget" element={<Forget />} />
        <Route  path="/" element={<Layout cartItems={ cartItems} setCartItems = {setCartItems} />}>
          <Route path="home" element={<Home  cartItems={ cartItems} setCartItems = {setCartItems}/>} />
          <Route path="purchase" element={<Purchase cartItems={ cartItems} setCartItems = {setCartItems} />} />
          <Route path="cart" element={<Cart cartItems={ cartItems} setCartItems = {setCartItems}/>} />
          <Route path="checkout" element={<Checkout cartItems={ cartItems} setCartItems = {setCartItems} />} />
          <Route path="profile" element={<Profile cartItems={ cartItems} setCartItems = {setCartItems} />} />
          <Route path="edit" element={<Edit />} />
          <Route path="/*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));