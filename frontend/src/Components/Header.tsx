import Button from "./Button";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../app/store";
import { useEffect } from "react";
import { userData } from "../feature/auth.slice";
import { NavLink } from "react-router-dom";

const Header = () => {
  const user = useSelector((state: RootState) => state.auth.user);
  const token = sessionStorage.getItem("token");
  const dispatch: AppDispatch = useDispatch();
  useEffect(() => {
    const getData = async () => {
      if (token) {
        try {
          await userData(token, dispatch);
        } catch (error) {
          console.error("erreur lors de la récupération du profil");
        }
      }
    };

    getData();
  }, [token, dispatch]);

  return (
    <div className="header">
      <h1>Welcome back {user.firstName + " " + user.lastName}!</h1>
      <NavLink to="/profile">
        <Button classe="edit-button" content="Edit Name" click={null} />
      </NavLink>
    </div>
  );
};

export default Header;
