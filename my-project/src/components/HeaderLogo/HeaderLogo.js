import './HeaderLogo.css';
import logo from "../../assets/logo.png";

const HeaderLogo = () => {
    return (
        <div className='header_logo'>
            <img src={logo} className="header_logo_img" alt="Rozetka logo"/>
        </div>
    )
}

export default HeaderLogo;