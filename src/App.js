import { useState } from "react";
import "./App.css";
import Alert from "./Components/Alert";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextFrom";
import About from "./Components/About";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"; 

function App() {

  const [Mode,setMode] =  useState('light');
  const [alert,setAlert] =  useState(null);
  
  const showAlert = (message,type) =>{

    setAlert({
      msg : message,
      type: type
    })
    setTimeout(() =>{
      setAlert(null);
    },1500);
  }

  // which we will pass to our Navbar from app.js. 
  // Our toggle mode function will change the mode with dark if our mode is light or vice versa.
  const toggleMode = ()=>{
      if(Mode==='light'){
        setMode('dark');
        document.body.style.backgroundColor = '#010c14';
        showAlert("Dark Mode is Enabled","success");
      }
      else{
        setMode('light');
        document.body.style.backgroundColor = 'white';
        showAlert("Light Mode is Enabled","success");
      }
  }


  return (
    <>
      <Router>
      <Navbar title="EditPad" about = "About us" mode={Mode} text={Mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
        <Switch>
            <Route exact path="/about">
              <About mode={Mode}/>
            </Route>
            <Route exact path="/">
              <TextForm heading = "EditPad - Word Substitution" mode={Mode} showAlert = {showAlert} />
            </Route>
        </Switch>
      </div>
      </Router>
    </>
  );
}

export default App;
