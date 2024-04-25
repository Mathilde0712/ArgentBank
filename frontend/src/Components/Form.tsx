import userLogo from "../designs/img/circle-user-solid.svg"
import Button from "./Button";

const Form = () => {
    return (
       
            <section className="sign-in-content">
                <img src={userLogo} className="sign-in-icon" alt="user icon" />
                <h1>Sign In</h1>
                <form>
                    <div className="input-wrapper">
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" />
                    </div>
                    <div className="input-remember">
                    <input type="checkbox" id="remember-me" />
                    <label htmlFor="remember-me">Remember me</label>
                    </div>
                </form>
                <Button classe="sign-in-button" content="Sign In"/>
            </section>
            
       
    );
};

export default Form;