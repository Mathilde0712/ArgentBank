import { NavLink } from 'react-router-dom';
import logo from '../designs/img/argentBankLogo.webp';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../app/store'; 
import { logout } from '../feature/auth.slice';
import signOutImg from "../designs/img/right-from-bracket-solid.svg"



const Navigation = ({textNav, logoUser}:{textNav : string, logoUser:string}) => {
    const dispatch: AppDispatch = useDispatch();
    const token = useSelector((state: RootState) => state.auth.token);

    const signOut = () => {
        sessionStorage.clear();
        dispatch(logout());
    };
    
    return (
        <div className="main-nav">
            <NavLink to="/" className="main-nav-item">
                <img src={logo} alt="logo" className="main-nav-logo-image" />
            </NavLink>
            {token ? (
                <div className="menu-nav-sign">
                    <NavLink to="/profile" className="main-nav-item"> 
                        <img src={logoUser} alt="userLogo" className="user-logo" />
                        <p>tonyo</p>
                    </NavLink>
                    <NavLink to="/" className="main-nav-item" onClick={signOut}>
                        <img src={signOutImg} alt="signOutLogo" className="user-logo" />
                        <p>{textNav}</p>
                    </NavLink>
                </div>
            ) : (
                <NavLink to="/sign-in" className="main-nav-item">
                    <img src={logoUser} alt="userLogo" className="user-logo" />
                    <p>{textNav}</p>
                </NavLink>
            )}
        </div>
    );
};


export default Navigation;