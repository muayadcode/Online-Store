import { Link } from 'react-router-dom';
function Edit () {
    return (
        <>
        <h2>Edit Profile</h2>

            <div class="edit-container">
            <div class="left-column">
            <div class="form-group">
            <label for="userName">User Name:</label>
            <input type="text" id="userName" placeholder="First, Last Name" />
            </div>

            <div class="form-group">
            <label>Email Address:</label>
            <input type="text" id="email" placeholder="user@example.com" />
            </div>

            <div class="form-group">
            <label for="password">Password:</label>
            <input type="password" id="password" placeholder="Enter Password" />
            </div>
            </div>

            <div class="right-column">
            <div class="form-group">
            <label for="confirmPassword">Confirm Password:</label>
            <input type="password" id="confirmPassword" placeholder="Confirm Password" />
            </div>

            <div class="form-group">
            <label for="address">Address:</label>
            <input type="text" id="address" placeholder="123 Street, City, Country" />
            </div>

            <div class="form-group">
            <label for="phoneNumber">Phone Number:</label>
            <input type="tel" id="phoneNumber" placeholder="(000) - 1 2 3 4 5 6" />
            </div>
            </div>
            </div>
            <div class="button-group">
            <Link to="/registration"><button className="submit-button">Submit Changes</button></Link>
            <Link to="/registration"><button className="discard-button">Discard Changes</button></Link>
            </div>
        </>
    );
}
export default Edit;