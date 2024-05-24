import { useState } from "react";
import Button from "./Button";


const EditFormUser = ({firstname, lastname, username}:{firstname : string, lastname:string, username:string}) => {
const [userName, setUsername] = useState("")


    return (
        <div className="editContent">
            <h1>Edit user info</h1>
            <form className="editUser">
                <div className="input-wrapper">
          <label htmlFor="username">Username : </label>
          <input
            type="text"
            id="username"
            onChange={(e: React.FormEvent<EventTarget>): void => {
              setUsername((e.target as HTMLInputElement).value);
            }}
            value={username}
          />
          </div>
          <div className="input-wrapper">
           <label htmlFor="firstname">First name : </label>
          <input
            type="text"
            id="firstname"
            readOnly= {true}
            value={firstname}
          />
          </div>
          <div className="input-wrapper">
           <label htmlFor="lastname">Last name : </label>
          <input
            type="text"
            id="lastname"
            readOnly= {true}
            value={lastname}
          />
          </div>
          <div className="buttonsEdit">
          <Button classe="save-button" content="Save" />
          <Button classe="save-button" content="Cancel" />
          </div>
          </form>
        </div>
      
    );
};

export default EditFormUser;