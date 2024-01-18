import React from 'react';
import { Link } from 'react-router-dom';

const Items = ({ id, title, imageUrl, description, price, addToCart }) => {
  return (
    <div className="item-container">
      <img className="prod" src={imageUrl} alt="product" />
      <h3 className='itemHeader'>{title}</h3>
      <p className='pTag'>{description}</p>
      <p className='pTag'>Price: ${price}</p>
      <button className="cartBtn" onClick={() => addToCart({ id, title, imageUrl, description, price, quantity: 1 })}><img className='cartImg' src='./images/cart.png'></img></button>
      <Link to="/cart">
        <button  className="myButton">Buy It Now</button>
      </Link>
      
      
    </div>
  );
};

export default Items;
