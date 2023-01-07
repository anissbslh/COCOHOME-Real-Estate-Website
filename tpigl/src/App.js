import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar.js';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Acceuil from './Acceuil';
import Apropos from './Apropos';
import Contact from './Contact';
import Profil from './Profil';
import NotFound from './NotFound';
import Home from './Home'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <div>
          <Switch>

            <Route exact path = "/">
              <Acceuil/>
            </Route>

            <Route path = "/apropos">
              <Apropos/>
            </Route>

            <Route path = "/contact">
              <Contact/>
            </Route>

            <Route path = "/auth">
              <Home/>
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
