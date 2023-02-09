import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Provider } from 'react-redux';

import store from './store';


import Layout from './hocs/Layout';

/*import containers*/ 
import Acceuil from './containers/Acceuil';
import AnnonceDetails from './containers/AnnonceDetails';
import Annonces from './containers/Annonces';
import Apropos from './containers/Apropos';
import Contact from './containers/Contact';
import Home from './containers/Home';
import Login from './containers/Login';
import Profil from './containers/Profil';
import SignUp from './containers/SignUp';
import NotAuthNavbar from './components/NotAuthNavbar';
import Resultats from './components/Resultats';

/*import components*/
import NotFound from './components/NotFound'
import Navbar from './components/Navbar';
import GoogleAuth from './GoogleAuth';

import {useEffect, useState} from 'react';
import {gapi} from 'gapi-script';
import Deposer from './components/Deposer';

//const clientId = "889650749204-ro7qei6g1dg6e0313d85l687oab0dfnh.apps.googleusercontent.com";



















   const App = () => {

  //   useEffect(()=> {
  //     function start() {
  //       gapi.client.init({
  //         clientId : clientId,
  //         scope: ""
  //       })
  //     };
    
  //     gapi.load('client:auth2', start);

  //   });
 

  


  return (
    <Provider store={store}>
      <Router>
        <Layout>
          
          <Switch>

            <Route exact path = '/'>
              <Acceuil />
            </Route>

            <Route exact path = "/apropos" component={Apropos}/>
            <Route exact path = "/contact" component={Contact}/>
            <Route exact path = "/annonces" component={Annonces}/>
            <Route exact path = "/annonces/:annonceId" component={AnnonceDetails}/>
            <Route exact path = "/login" component={Login}/>
            <Route exact path = "/signup" component={SignUp}/>
            
            <Route exact path = "/profil">
              <Profil/>
            </Route>
            <Route path="/search" component={Resultats} />
            <Route path="/deposer" component={Deposer}/>

            <Route component={NotFound}/>
            
            
          </Switch>
        </Layout>
      </Router>
      </Provider>
  );
}

export default App;














