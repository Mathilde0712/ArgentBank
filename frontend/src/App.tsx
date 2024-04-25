
import  { BrowserRouter, Routes, Route } from "react-router-dom";
import "../src/designs/css/main.css"
import Home from './Pages/Home';
import SignIn from "./Pages/SignIn";
import User from "./Pages/User";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/sign-in" element={<SignIn />}/>
       <Route path="/user/:id" element={<User />}/>
    {/*<Route path="*" element={}/> */}
    </Routes>
    </BrowserRouter>
  );
}

export default App;
