import { FunctionComponent } from "react";
import { NavLink } from "react-router-dom";
import "../stylesheet/Navbar.css"
import darkMood from '../assesrt/moon.png';
interface NavbarProps {

}

const Navbar: FunctionComponent<NavbarProps> = () => {
    return (<>
        <nav
            id="navbar"
            className="navbar navbar-expand-lg bg-dark text-light"
            data-bs-theme="dark"
        >
            <div className="container-fluid">
                <NavLink className="navbar-brand text-info" to="/home">
                    BCard
                </NavLink>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link" aria-current="page" to="/About">
                                About
                            </NavLink>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    </form>
                    <div id="btns" >
                        <button type="button" className="btn btn-light"><img src={darkMood} alt="dark mood" /></button>

                        <button type="button" className="btn btn-light">SINGUP</button>
                        <button type="button" className="btn btn-light">LOGIN</button>
                    </div>
                </div>
            </div>
        </nav></>);
}

export default Navbar;