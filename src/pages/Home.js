
import Items from "./Items";
import React, { useState, useEffect } from 'react';
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../firebase-config.js";


function Home({cartItems , setCartItems}) {
  const [products, setItems] = useState([]);

  useEffect(() => {
    const itemsCollection = collection(db, 'products');
    onSnapshot(itemsCollection, (snapshot) => {
      const fetchedProducts = snapshot.docs.map(doc => {
        const data = doc.data();
        return {
          id: doc.id,
          title: data.title,
          imageUrl: data.url,
          description: data.description,
          price: data.price
        };
      });
      setItems(fetchedProducts);
    });
  }, []); 

  const addToCart = (productId) => {
    const existingItem = cartItems.find(item => item.id === productId);

    if (existingItem) {
      const updatedCart = cartItems.map(item =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCartItems(updatedCart);
    } else {
      const productToAdd = products.find(product => product.id === productId);
      setCartItems([...cartItems, { ...productToAdd, quantity: 1 }]);
    }
};

  const renderItems = () => {
    return products.map((item) => (
      <Items
        key={item.id}
        title={item.title}
        imageUrl={item.imageUrl}
        description={item.description}
        price={item.price}
        addToCart={() => addToCart(item.id)}
      />
    ));
  };
    
  return (
    <>
    <img className="banner" src='./images/cover.png'></img>
      <div className="home-container">
        
        <div className="category-container">
          <img className='categories' src='./images/league.png' alt="product" />
          <img className='categories' src='./images/TS.png' alt="product" />
          <img className='categories' src='./images/SHORTS.png' alt="product" />
        </div>
        <div className="item-home">
          {renderItems()}
        </div>
        </div>
      
    </>
  );
}

export default Home;
