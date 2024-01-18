import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
const Purchase = ({cartItems}) => {
    const [cart, setCart] = useState(cartItems);

    // Update state when cartItems prop changes
    useEffect(() => {
    setCart(cartItems);
    }, [cartItems]);
 
    return (
        <>
            <h2>Thank You For Your Purchase</h2>
            <div class="purchase-container">
                
            <div class="summary-box">
            <h2>Summary of Items Purchased</h2>
            <ul>
            {cart.map((item) => (
                <li className='pTags' key={item.id}>
                <img className="item-images" src={item.imageUrl} alt={`Product: ${item.title}`} /> {item.title} - {item.quantity}
                </li>
            ))}
                
            </ul>
            </div>

            <div class="delivery-box">
            <h2>Delivery Date</h2>
             <p className='pTags'>Estimated delivery date: December 28, 2023</p>
            </div>
            </div>
            <div class="return-link">
            <Link className="myUser" to="/home">Return Home</Link>
            </div>
        </>
    );
}
export default Purchase;