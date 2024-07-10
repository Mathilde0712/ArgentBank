import { useEffect, useState } from "react";
import userLogo from "../designs/img/circle-user-solid.svg";
import Button from "./Button";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../app/store";
import { login } from "../feature/auth.slice";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  useEffect(() => {
    const savedEmail = localStorage.getItem("email");
    if (savedEmail) {
      setEmail(savedEmail);
      setRememberMe(true);
    }
  }, []);

  const signIn = async () => {
    try {
      await login(email, password, dispatch, navigate);
      if (rememberMe) {
        localStorage.setItem("email", email);
      } else {
        localStorage.removeItem("email");
      }
    } catch (error) {
      console.error("erreur lors de la connexion");
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
            value={email}
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
            value={password}
            onChange={(e: React.FormEvent<EventTarget>): void => {
              setPassword((e.target as HTMLInputElement).value);
            }}
          />
        </div>

        <div className="input-remember">
          <input
            type="checkbox"
            id="remember-me"
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
          />
          <label htmlFor="remember-me">Remember me</label>
        </div>
        <Button classe="sign-in-button" content="Sign In" click={null} />
      </form>
    </section>
  );
};

export default Form;
