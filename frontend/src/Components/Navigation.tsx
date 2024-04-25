import { NavLink } from "react-router-dom";
import logo from "../designs/img/argentBankLogo.webp"


const Navigation = ({textNav, logoUser}:{textNav : string, logoUser:string}) => {
    return (
        <div className="main-nav">
            <NavLink to="/" className="main-nav-item">
                <img src={logo} alt="logo" className="main-nav-logo-image" />
            </NavLink>
            <div>
            <NavLink to="/sign-in" className="main-nav-item">
               <img src={logoUser} alt="userLogo" className="user-logo" />
               <p>{textNav}</p>
            </NavLink>
            </div>
            
        </div>
    );
};

export default Navigation;