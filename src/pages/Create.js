import { Link } from 'react-router-dom';
const NewProfile = () => {
    return (
        <>
            <h2 className='userP'>Sign Up For 10% Discount</h2>
            <section className='userContainer'> 
                <form className='userForm'>
                <label>User Name:</label>
                    <input type="text" id="fName" placeholder='First, Last Name' />
                <label>Email:</label>
                <input type="text" id="email" placeholder="user@example.com" />
                <label>Password:</label>
                <input type="password" id="password" placeholder="8-16 charcaters" />
                <label>Address:</label>
                <input type="text" id="address" placeholder="123 Street, City, Country"/>
                <label>phone number:</label>
                <input type="text" id="number" placeholder="(000) - 1 2 3 4 5 6"/>
                <Link className="myUsers" to="/registration">Create</Link>
            </form>
            </section>
            
        </>
    );
}
export default NewProfile;