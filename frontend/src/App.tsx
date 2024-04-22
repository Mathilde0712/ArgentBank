
import  { BrowserRouter, Routes, Route } from "react-router-dom";
import "../src/designs/css/main.css"
import Home from './Pages/Home';
import SignIn from "./Pages/SignIn";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/sign-in" element={<SignIn />}/>
      {/* <Route path="" element={}/>
      <Route path="*" element={}/> */}
    </Routes>
    </BrowserRouter>
  );
}

export default App;
