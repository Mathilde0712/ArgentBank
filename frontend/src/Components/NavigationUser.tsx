import { NavLink } from "react-router-dom";
import logo from "../designs/img/argentBankLogo.webp"
import signOut from "../designs/img/right-from-bracket-solid.svg"

const NavigationUser = ({textNav, logoUser, name}:{textNav : string, logoUser:string, name :string }) => {
    return (
        <div className="main-nav">
        <NavLink to="/" className="main-nav-item">
            <img src={logo} alt="logo" className="main-nav-logo-image" />
        </NavLink>
        <div className="menu-nav-sign">
        <NavLink to="/sign-in" className="main-nav-item">
           <img src={logoUser} alt="userLogo" className="user-logo" />
           <p>{name}</p>
        </NavLink>
        <NavLink to="/sign-in" className="main-nav-item">
           <img src={signOut} alt="userLogo" className="user-logo" />
           <p>{textNav}</p>
        </NavLink>
        </div>
        </div>
    );
};

export default NavigationUser;
