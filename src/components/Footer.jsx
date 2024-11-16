import './Footer.scss';
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer>
            <img src="/pics/logo.png" alt="logo footer" className='logo-footer'/>
            <Link className="nav-link" to="/legal">Copyright - Cookies</Link>
        </footer>
    )
};
export default Footer;