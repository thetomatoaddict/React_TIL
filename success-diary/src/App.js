import './App.css';
import React, { useEffect, useState } from "react";
import SimpleSlider from "./components/carousel.js";
import LoginForm from "./components/LoginForm.js";



function App() {
  useEffect(() => {
    if (localStorage.getItem("loggedIn") === null) {
    localStorage.setItem("loggedIn", false);
    }
  },[])

  return(
    <div className="App">

    </div>
  )

  
}

export default App;
