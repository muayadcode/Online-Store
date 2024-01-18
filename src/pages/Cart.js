import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Cart = ({ cartItems, setCartItems }) => {
  const [cart, setCart] = useState(cartItems);

  useEffect(() => {
    setCart(cartItems);
  }, [cartItems]);

  const removeFromCart = (itemId) => {
    const updatedCart = cart.map(item => {
      if (item.id === itemId) {
        // If the item is found, decrease its quantity
        const updatedItem = { ...item, quantity: item.quantity - 1 };
        return updatedItem;
      }
      return item;
    }).filter(item => item.quantity > 0);

    setCartItems(updatedCart);
    setCart(updatedCart);
  }

  const addToCart = (itemId) => {
    const updatedCart = cart.map(item => {
      if (item.id === itemId) {
        // If the item is found, increase its quantity
        const updatedItem = { ...item, quantity: item.quantity + 1 };
        return updatedItem;
      }
      return item;
    });

    setCartItems(updatedCart);
    setCart(updatedCart);
  }



  return (
    <>
      {cart.map(item => (
        <div key={item.id} className="cart-container">
          <img className="item-image" src={item.imageUrl} alt={`Product: ${item.title}`} />
          <div className="item-details">
            <h3 className='itemHeaders'>{item.title}</h3>
            <p className='pTag'>{item.description}</p>
            <p className='pTag'>Price: ${item.price}</p>
            <p className='pTag'>Quantity: {item.quantity}</p>
          </div>
          <div className="action-buttons">
            <button className="aBtn" onClick={() => addToCart(item.id)}>Add</button>
            <button className="rBtn" onClick={() => removeFromCart(item.id)}>Remove</button>
            
          </div>
        </div>
      ))}

      <Link className="myButtons" to="/checkout">Proceed to Checkout</Link>
    </>
  );
}

export default Cart;
