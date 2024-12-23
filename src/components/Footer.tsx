import { FunctionComponent } from "react";
import About from "../assesrt/info.png";
import "../stylesheet/Navbar.css"
interface FooterProps {

}

const Footer: FunctionComponent<FooterProps> = () => {
    return (<>

        <div id="footer">
            <img src={About} alt="About" />
            <p>About</p>
        </div>
    </>);
}

export default Footer;