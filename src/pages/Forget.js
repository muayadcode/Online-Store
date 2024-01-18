import { Link } from 'react-router-dom';
function Forgert()  {
    return (
        <>
            <div className="forgot-password-container">
            <div className="forgot-password-form">
                <h2 className="form-title">Forgot Password</h2>
                <p className="form-description">Enter your email to reset your password.</p>
                <form className="password-form">
                <label className="form-label" htmlFor="email">Email:</label>
                <input className="form-input" type="email" id="email" name="email" />
                
                <Link to="/registration"><button className="submit-button">Submit Changes</button></Link>
                </form>
            </div>
            </div>
        </>
    );
}
export default Forgert;