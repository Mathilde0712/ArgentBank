import { useEffect, useState } from "react";
import Button from "./Button";
import { AppDispatch, RootState } from "../app/store";
import { useDispatch, useSelector } from "react-redux";
import { editUsername } from "../feature/auth.slice";
import { useNavigate } from "react-router-dom";

const EditFormUser = () => {
  const user = useSelector((state: RootState) => state.auth.user);
  const token = useSelector((state: RootState) => state.auth.token);
  const [username, setUsername] = useState(user.userName);
  const [error, setError] = useState("");
  const AppDispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    setUsername(user.userName);
  }, [user.userName]);

  const cancelButton = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    navigate("/user");
  };

  const saveButton = async (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    if (username.trim() === "") {
      setError("Vous devez renseigner un nom d'utilisateur");
      return;
    }
    if (token) {
      await editUsername(token, username, AppDispatch);
      setUsername("");
      cancelButton(e);
    }
  };

  return (
    <div className="editContent">
      <h1>Edit user info</h1>
      <form className="editUser">
        <div className="input-wrapper">
          <label htmlFor="username">Username : </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e: React.FormEvent<EventTarget>): void => {
              setUsername((e.target as HTMLInputElement).value);
              setError("");
            }}
          />
          {error && <span className="error-message">{error}</span>}
        </div>
        <div className="input-wrapper">
          <label htmlFor="firstname">First name : </label>
          <input
            type="text"
            id="firstname"
            readOnly={true}
            value={user.firstName}
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="lastname">Last name : </label>
          <input
            type="text"
            id="lastname"
            readOnly={true}
            value={user.lastName}
          />
        </div>
        <div className="buttonsEdit">
          <Button classe="save-button" content="Save" click={saveButton} />
          <Button classe="save-button" content="Cancel" click={cancelButton} />
        </div>
      </form>
    </div>
  );
};

export default EditFormUser;
