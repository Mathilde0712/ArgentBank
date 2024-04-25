import Account from "../Components/Account";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import NavigationUser from "../Components/NavigationUser";
import userLogo from "../designs/img/circle-user-solid.svg";

const User = () => {
    // const id = useParams();

  return (
    <div>
      <NavigationUser textNav="Sign In" logoUser={userLogo} name="tony" />
      <main className="main bg-dark">
        <Header name="tony" />
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

export default User;
