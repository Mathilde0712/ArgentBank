
import { useState } from "react";
import userLogo from "../designs/img/circle-user-solid.svg"
import Button from "./Button";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../actions/auth.action";


const Form = () => {
   
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const error = useSelector((state : any) => state.auth.error);
  
    const handleSubmit = (e :any) => {
      e.preventDefault();
      dispatch(login(email, password));
    };
  

    return (
       
            <section className="sign-in-content">
                <img src={userLogo} className="sign-in-icon" alt="user icon" />
                <h1>Sign In</h1>
                <form onSubmit={handleSubmit} >
                    <div className="input-wrapper">
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="input-remember">
                    <input type="checkbox" id="remember-me" />
                    <label htmlFor="remember-me">Remember me</label>
                    </div>
                    <Button classe="sign-in-button" content="Sign In"/>
                </form>
                {error && <div>{error}</div>}
            </section>
            
       
    );
};

export default Form;