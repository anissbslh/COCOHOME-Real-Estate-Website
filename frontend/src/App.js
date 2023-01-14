import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {useRef, useState} from 'react';

import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar.js';
import Acceuil from './Acceuil';
import Apropos from './Apropos';
import Contact from './Contact';
import Profil from './Profil';
import NotFound from './NotFound';
import Home from './Home';
import NotAuthNavbar from './NotAuthNavbar';

import {useEffect} from 'react';
import {gapi} from 'gapi-script';

const clientId = "889650749204-ro7qei6g1dg6e0313d85l687oab0dfnh.apps.googleusercontent.com";



function App() {


  useEffect(()=> {
    function start() {
      gapi.client.init({
        clientId : clientId,
        scope: ""
      })
    };
  
    gapi.load('client:auth2', start);

  });

  const [auth, setAuth] = useState(false);
  const [user, setUser] = useState('');


  const onSuccess = (res) => {
    //console.log("login cool, uuser : ",res.isSignedIn());
    setAuth(true);
    setUser(res.profileObj);
    console.log(res.profileObj.familyName);

}

const onFailure = (res) => {
    console.log("login NOTcool, res : ",res);
    setAuth(false);
    setUser(null);
}

const onLogoutSuccess = () => {
  setAuth(false);
  console.log("log out cool ",auth);
  
}


  return (
    <Router>
      <div className="App">
        {auth ? <Navbar user={user}/> : <NotAuthNavbar/>}
        <div>
          <Switch>

            <Route exact path = "/">
              {auth ? <Home/> : <Acceuil onSuccess={onSuccess} onFailure={onFailure} onLogoutSuccess={onLogoutSuccess}/>} 
              
            </Route>

            <Route path = "/contact">
              <Contact/>
            </Route>

            <Route path = "/apropos">
              <Apropos/>
            </Route>

            <Route path = "/auth">
              <Home/>
            </Route>

            <Route path = "/profil">
              <Profil user={user} onLogoutSuccess={onLogoutSuccess}/>
            </Route>

            <Route path="*">
              <NotFound/>
            </Route>

          </Switch>
        </div>
        
      </div>
    </Router>
  );
}

export default App;
