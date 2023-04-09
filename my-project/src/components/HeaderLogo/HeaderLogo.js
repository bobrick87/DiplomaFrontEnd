import './HeaderLogo.css';
import logo from "../../assets/logo.png";
import { Link } from 'react-router-dom';

const HeaderLogo = () => {
    return (
        <div className='header_logo'>
            <Link to="/"><img src={logo} className="header_logo_img" alt="Rozetka logo"/> </Link>
        </div>
    )
}

export default HeaderLogo;