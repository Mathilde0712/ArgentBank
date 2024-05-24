import { useState } from "react";
import userLogo from "../designs/img/circle-user-solid.svg";
import Button from "./Button";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../app/store";
import { login } from "../feature/auth.slice";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const navigate = useNavigate()
  const dispatch: AppDispatch = useDispatch(); 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | undefined>(undefined);

  const signIn = async () => {
    try {     
      await login(email, password, dispatch, navigate);
  
    } catch (error) {
      setError("erreur lors de la connexion")
    }
  };

  const onSubmit = async (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
     await signIn();
    
  }; 
  return (
    <section className="sign-in-content">
      <img src={userLogo} className="sign-in-icon" alt="user icon" />
      <h1>Sign In</h1>
      <form onSubmit={onSubmit}>
        <div className="input-wrapper">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            onChange={(e: React.FormEvent<EventTarget>): void => {
              setEmail((e.target as HTMLInputElement).value);
            }}
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            onChange={(e: React.FormEvent<EventTarget>): void => {
              setPassword((e.target as HTMLInputElement).value);
            }}
          />
        </div>
        {error && <div className="textError">Erreur lors de la connexion</div>} 
        <div className="input-remember">
          <input type="checkbox" id="remember-me" />
          <label htmlFor="remember-me">Remember me</label>
        </div>
        <Button classe="sign-in-button" content="Sign In" />
      </form>
     
    </section>
  );
};

export default Form;
