import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
const Profile =  ({cartItems}) => {
    const [cart, setCart] = useState(cartItems);

    // Update  state when cartItems prop changes
    useEffect(() => {
    setCart(cartItems);
    }, [cartItems]);

    return (
        <>
            <h2>User Profile</h2>
            <div class="userContainer">

            <div class="info-section">
            <p class="info-label">User Name:</p>
            <p className='pTag'>Leo Cris</p>
            </div>

            <div class="info-section">
            <p class="info-label">Address:</p>
            <p className='pTag'>123 Main Street, Cityville, Country</p>
            </div>

            <div class="info-section">
            <p class="info-label">Phone Number:</p>
            <p className='pTag'>(555) 123-4567</p>
            </div>
                <Link className="myUser" to="/edit">Edit Profile</Link>
            </div>
            <div class="purchaseHistory">
                <h2>Purchase History</h2>
                <ul>
                {cart.map((item) => (
                <li className='pTags' key={item.id}>
                <img className="purchase-image" src={item.imageUrl} alt={`Product: ${item.title}`} /> {item.title} - {item.quantity}
                </li>
            ))}
                    
                </ul>
            </div>
            
        </>
    );
}
export default Profile;