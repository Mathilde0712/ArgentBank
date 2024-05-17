import { useState } from "react";
import userLogo from "../designs/img/circle-user-solid.svg";
import Button from "./Button";
import { useDispatch } from "react-redux";
import { register } from "../feature/auth.slice";
import { AppDispatch } from "../app/store";

const Form = () => {
    const dispatch: AppDispatch = useDispatch(); // Typage du dispatch
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const onSubmit = (e: React.FormEvent<EventTarget>): void => {
    e.preventDefault();
    console.log( email, password);
    dispatch(register({email, password}));
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
