import { FunctionComponent } from "react";
import '../stylesheet/Navbar.css'
interface NavbarProps {

}

const Navbar: FunctionComponent<NavbarProps> = () => {
    return (
        <nav className="navbar">
            <div className="container">
                <div className="navbar-brand">
                    <a href="/">BCard</a>
                </div>
                <div className="navbar-links">
                    <a href="/about">About</a>
                </div>
                <div className="navbar-search">
                    <input type="text" placeholder="Search" />
                    <button type="submit"><i className="fa fa-search"></i></button>
                </div>
                <div className="navbar-actions">
                    <a href="/signup">Signup</a>
                    <a href="/login">Login</a>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;