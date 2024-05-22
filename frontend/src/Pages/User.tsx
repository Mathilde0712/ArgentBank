import Account from "../Components/Account";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Navigation from "../Components/Navigation";
import userLogo from "../designs/img/circle-user-solid.svg";

const User = () => {
  
  return (
    <div>
      <Navigation textNav="Sign Out" logoUser={userLogo}  />
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
