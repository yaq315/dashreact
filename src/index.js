import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import Homepage from "./components/pages/home";
import Signup from "./components/pages/signup";
import Login from "./components/pages/login";
  import Aboutpage from "./components/pages/Aboutpage";
import Contactbage from "./components/pages/Contactbage";
import Dash from './components/dashboard/dashboard'

import './i18n'; 




  const Index = () => {
return(
  <Router>
  <Routes>
    <Route path="/" element={<Homepage />} /> 
    <Route path="/Home" element={<Homepage />} /> 
    <Route path="/signup" element={<Signup />} /> 
    <Route path="/login" element={<Login />} /> 
    <Route path="/Aboutpage" element={< Aboutpage/>} /> 
    <Route path="/Contactbage" element={< Contactbage/>} /> 
    <Route path="/dash" element={< Dash/>} /> 

  
  </Routes>

</Router>

 
)

  }


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>
);




