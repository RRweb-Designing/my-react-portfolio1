import {BrowserRouter, Routes, Route} from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js"
import Home from "./pages/home.jsx";
import About from "./pages/about.jsx";
import Contact from "./pages/contact.jsx";
import {Signin} from "./pages/signin.jsx";
import Signup from "./pages/signup.jsx";
import Navbar from "./components/navbar.jsx";
import Footer from "./components/footer.jsx";
import './App.css';
import React from "react";


function App() {
    

  
  
 return (
    <>

    <BrowserRouter>
    <Navbar/>
    <Routes>
      
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/signin" element={<Signin/>}/>
      <Route path="/signup" element={<Signup/>}/>
    
  
     
      </Routes>

      </BrowserRouter>
      <Footer/>
       </>
    
    
  );
};

export default App;
