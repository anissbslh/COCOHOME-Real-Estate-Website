import image from '../assets/acceuil-apropos.png';
import {useRef, useState} from 'react';

import {GoogleLogin} from 'react-google-login';
import GoogleAuth from '../GoogleAuth';
import { Link, Redirect } from "react-router-dom";


const clientId = "889650749204-ro7qei6g1dg6e0313d85l687oab0dfnh.apps.googleusercontent.com";

const Acceuil = () => {


    

    // const ref = useRef(null);
    // const handleClick = () => {
    //     ref.current?.scrollIntoView({behavior: 'smooth'});
    // };

    const [auth, setAuth] = useState(false);
    const [email, setEmail] = useState('')

    
        const btnToAccueil = (auth,email) => {
            setAuth(auth);
            setEmail(email);
            
            console.log(auth, email);
        }
        if (auth)
            return <Redirect to='/home' />;

  return (
    <div>

        <div className="accueil">
            <h1 className="">Trouvez la maison de vos rêves</h1>

            <div className='accueil-btn-container'>

            <GoogleAuth btnToAccueil = {btnToAccueil}></GoogleAuth>
                {/* <button onClick={handleClick} className="accueil-btn-gauche">A propos de nous</button>
                
            
                <div id="signInButton">
                    <GoogleLogin
                    className="accueil-btn-connecter"
                    clientId={clientId}
                    buttonText="Se connecter"
                    onSuccess={onSuccess}
                    onFailure={onFailure}
                    isSignedIn={true}
                    />
                </div> */}

                

            </div>
        </div>

        <div className="accueil-apropos">
            <img className='acceuil-apropos-image' src={image} alt="notre equipe" />
            <div className='acceuil-apropos-textes'>
                <h1>Vous êtes entre de bonnes mains</h1>
                <p>Torquatos nostros? quos dolores eos, qui dolorem ipsum per se texit, ne ferae quidem se repellere, idque instituit docere sic: omne animal, simul atque integre iudicante itaque aiunt hanc quasi involuta aperiri, altera occulta quaedam et voluptatem accusantium doloremque.</p>
            </div>
        </div>

    </div>
  );
}

export default Acceuil