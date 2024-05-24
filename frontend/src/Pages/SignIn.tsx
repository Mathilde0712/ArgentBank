
import Navigation from '../Components/Navigation';
import Footer from '../Components/Footer';
import Form from '../Components/Form';
import userLogo from "../designs/img/circle-user-solid.svg"


const SignIn = () => {
   
    return (
        <div>
            <Navigation textNav='Sign In' logoUser={userLogo} name="" />
            <main className="main bg-dark">
            <Form />
            </main>
            <Footer />
        </div>
    );
};

export default SignIn;