import { NavLink } from "react-router-dom";
import logo from "../designs/img/argentBankLogo.webp"
import userLogo from "../designs/img/circle-user-solid.svg"

const Navigation = ({textNav}:{textNav : string}) => {
    return (
        <div className="main-nav">
            <NavLink to="/" className="main-nav-item">
                <img src={logo} alt="logo" className="main-nav-logo-image" />
            </NavLink>
            
            <NavLink to="/sign-in" className="main-nav-item">
               <img src={userLogo} alt="userLogo" className="user-logo" />
               <p>{textNav}</p>
            </NavLink>
            
        </div>
    );
};

export default Navigation;