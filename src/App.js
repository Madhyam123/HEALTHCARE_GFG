import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
/* import jwt_decode from "jwt-decode"; */
import Bmi from "./components/Bmi";
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Support from './components/Support';
import AllInOne from './components/AllInOne';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import Visvalization from './components/Visualization';
import Stattics from './components/Stattics';
import Register from './components/Register';
import Chatbot from './components/Chatbot';
import "./App.css";
function App() {
  const [buttonPopup , setButtonPopup] = useState(false);
   /* 
  const [user,SetUser] = useState({});
  
  function handleCallbackResponse(response){
    console.log("Encoded JWT ID Token:"+response.credential);
    var userObject=jwt_decode(response.credential);
    console.log(userObject);
    SetUser(userObject);
    document.getElementById("signInDiv").hidden=true;
  }
  function handleSignOut(event){
    SetUser({});
    document.getElementById("signInDiv").hidden=false;
  }
  useEffect(()=>{
    window.google.accounts.id.initialize({
      client_id:"239663637489-7h5db2mcf48unqlacagv4vhupnsj2t1m.apps.googleusercontent.com",
      callback:handleCallbackResponse
    });
    window.google.accounts.id.renderButton(
      document.getElementById("signInDiv"),
      {theme:"outline",size:"large"}
    );
    window.google.accounts.id.prompt();
  },[]); */
  return (
    <div className='dark:bg-black'>
     {/*  <div id='signInDiv'></div>
      {Object.keys(user).length!==0 &&
        <button className='p-6 text-white bg-green-500' onClick={(e)=>handleSignOut(e)}>Signout</button>
        
      } 
      {user &&
      <div>
        <img src={user.picture} alt="" />
        <h3 className='text-blue-700'>{user.name}</h3>
      </div>
      } */}                     
      <Router>
       <Navbar/>
        <Switch>
          <Route exact path='/'>
  
        <button onClick={()=>{setButtonPopup(true)}} id="btnBmi" className="px-2 py-2 bg-red-400 border-none" >Bmi</button>

            <Hero />
            <Chatbot />
           
            <Bmi trigger={buttonPopup} setTrigger= {setButtonPopup}/>
            <About />
            
            <Support />
            <AllInOne />
            <Pricing />
            

          </Route>
      
      
          <Route exact path ='/Stattics'>
            <Stattics />
            <Visvalization/>
          </Route>
          <Route exact path = '/Register'>
            <Register />
          </Route>
        </Switch>

        <Footer />
      </Router>
    </div>
  );
}

export default App; 