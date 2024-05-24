import { useEffect } from "react";
import Navigation from "../Components/Navigation";
import userLogo from "../designs/img/circle-user-solid.svg";
import { userData } from "../feature/auth.slice";
import { AppDispatch, RootState } from "../app/store";
import { useDispatch, useSelector } from "react-redux";
import Account from "../Components/Account";
import Footer from "../Components/Footer";
import EditFormUser from "../Components/EditFormUser";

const UserProfile = () => {
  const user = useSelector((state: RootState) => state.auth.user);
  const dispatch: AppDispatch = useDispatch();
  const token = useSelector((state: RootState) => state.auth.token);

  useEffect(() => {
    const fetchData = async () => {
      if (token) {
        // Vérification si le token existe avant de faire l'appel
        try {
          await userData(token, dispatch); // Utiliser directement token
        } catch (error) {
          console.error(
            "Une erreur s'est produite lors de la récupération du profil :",
            error
          );
        }
      }
    };

    fetchData();
  }, [token, dispatch]);

  return (
    <div>
      <Navigation textNav="Sign Out" logoUser={userLogo} name={user.userName} />
   
      <main className="main bg-dark">
        <EditFormUser firstname ={user.firstName} lastname={user.lastName} username={user.userName}/>
      <h2 className="sr-only">Accounts</h2>
      <Account
        title="Argent Bank Checking (x8349)"
        amount="$2,082.79"
        description="Available Balance"
      />
      <Account
        title="Argent Bank Savings (x6712)"
        amount="$10,928.42"
        description="Available Balance"
      />
      <Account
        title="Argent Bank Credit Card (x8349)"
        amount="$184.30"
        description="Current Balance"
      />
      </main>
      <Footer />
    </div>
  );
};

export default UserProfile;
