
import  { BrowserRouter, Routes, Route } from "react-router-dom";
import "../src/designs/css/main.css"
import Home from './Pages/Home';
import SignIn from "./Pages/SignIn";
import User from "./Pages/User";
import { useSelector } from "react-redux";
import { RootState } from "./app/store";
import UserProfile from "./Pages/UserProfile";

function App() {
  const token = useSelector((state: RootState) => state.auth.token);

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/sign-in" element={<SignIn />}/>
      {token ? (
       <Route path="/user" element={<User />}/>
      ) : (
        <Route path="/user" element={<SignIn />}/>
      )}
            {token ? (
       <Route path="/profile" element={<UserProfile />}/>
      ) : (
        <Route path="/profile" element={<SignIn />}/>
      )}
    {/*<Route path="*" element={}/> */}
    </Routes>
    </BrowserRouter>
  );
}

export default App;
