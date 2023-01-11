import { Link } from "react-router-dom";
import {useRef, useState, useEffect} from 'react';



const NotAuthNavbar = () => {

    

   return (
        <nav className="navbar">
            <div>
                <h1>COCOHOME</h1>
            </div>
            

            
           <div className="links">
                <Link to="/">Accueil</Link>
                <Link to="/apropos">A propos</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/auth" className="connect">Se connecter</Link>
            </div>
        </nav>
        );
    
}
 
export default NotAuthNavbar;