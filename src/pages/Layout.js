import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
const Layout = () => {
    return (
        <>
        <header>
            <div className="header-content">
            <Link to = "/home"> <img src='./images/LOGO.png' className='logo'></img></Link>
            <nav>
                <ul>
                <li><Link to = "/home"><a>Home</a></Link> </li>
                <li><Link to= "/profile"><a>Profile</a></Link></li>
                <li><Link to="/cart"><a> Cart </a></Link></li>
                </ul>
            </nav>
            </div>
        </header>
        <Outlet />
    </>
    )
};

export default Layout;