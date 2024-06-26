import { NavLink } from "react-router-dom";
import logo from "../designs/img/argentBankLogo.webp";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../app/store";
import { logout, userData } from "../feature/auth.slice";
import signOutImg from "../designs/img/right-from-bracket-solid.svg";
import { useEffect } from "react";

const Navigation = ({
  textNav,
  logoUser,
}: {
  textNav: string;
  logoUser: string;
}) => {
  const dispatch: AppDispatch = useDispatch();
  const token = useSelector((state: RootState) => state.auth.token);
  const user = useSelector((state: RootState) => state.auth.user);

  const signOut = () => {
    sessionStorage.clear();
    dispatch(logout());
  };

  useEffect(() => {
    const getData = async () => {
      if (token) {
        try {
          await userData(token, dispatch);
        } catch (error) {
          console.error(
            "Une erreur s'est produite lors de la récupération du profil :",
            error
          );
        }
      }
    };

    getData();
  }, [token, dispatch]);

  return (
    <div className="main-nav">
      <NavLink to="/" className="main-nav-item">
        <img src={logo} alt="logo" className="main-nav-logo-image" />
      </NavLink>
      {token ? (
        <div className="menu-nav-sign">
          <NavLink to="/user" className="main-nav-item">
            <img src={logoUser} alt="userLogo" className="user-logo" />
            <p>{user.userName} </p>
          </NavLink>
          <NavLink to="/" className="main-nav-item" onClick={signOut}>
            <img src={signOutImg} alt="signOutLogo" className="user-logo" />
            <p>Sign Out</p>
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
