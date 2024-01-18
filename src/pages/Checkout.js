import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Checkout = ({ cartItems, setCartItems }) => {
    const [cart, setCart] = useState(cartItems);

  // Update local state when cartItems prop changes
    useEffect(() => {
        setCart(cartItems);
    }, [cartItems]);

  // Calculate total cost
    const calculateTotalCost = () => {
        const beforeTax = cart.reduce((total, item) => total + item.price * item.quantity, 0);
        const withTax = beforeTax * 1.13; 
        return { beforeTax, withTax };
    };
    const { beforeTax, withTax } = calculateTotalCost();

return (
    <>
    <div className="checkout-container">
        <div className="left-column">
            <div className="total-cost">
            <h2>Total Cost</h2>
            <p className='pTag'>Total: ${beforeTax.toFixed(2)}</p>
            <p className='pTag'> Plus Tax: ${withTax.toFixed(2)}</p>
            </div>

            <div className="user-info">
            <h2>User Information</h2>
            <p className='pTag'>Name: Leo Cris</p>
            <p className='pTag'>Address: 123 Main Street, Cityville, Country</p>
            <p className='pTag'>Phone Number: (555) 123-4567</p>
            </div>
        </div>

        <div className="right-column">
            <div className="payment-info">
            <form className="payment-form">
            <h2>Payment Details</h2>
            <label for="cardType">Card Type:</label>
            <select id="cardType" name="cardType" required>
                <option value="visa">Visa</option>
                <option value="mastercard">MasterCard</option>
            </select>

            <label for="cardNumber">Card Number:</label>
            <input type="text" id="cardNumber" name="cardNumber" required />

            <label for="expiration">Expiration Date:</label>
            <input type="text" id="expiration" name="expiration" placeholder="MM/YYYY" required />

            <label for="securityCode">Security Code:</label>
            <input type="text" id="securityCode" name="securityCode" required />

                <Link to="/purchase" className="purchase-link">
                <button type="submit" className="purchase-button">
                    Submit Purchase
                </button>
                </Link>
            </form>
            </div>
        </div>
    </div>
    <Link className="bReturn" to="/home">
    Return Home
    </Link>
</>
);
};

export default Checkout;
