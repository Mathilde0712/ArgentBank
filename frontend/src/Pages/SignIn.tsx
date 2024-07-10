import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Form from "../components/Form";
import userLogo from "../designs/img/circle-user-solid.svg";

const SignIn = () => {
  return (
    <div>
      <Navigation textNav="Sign In" logoUser={userLogo} />
      <main className="main bg-dark">
        <Form />
      </main>
      <Footer />
    </div>
  );
};

export default SignIn;
