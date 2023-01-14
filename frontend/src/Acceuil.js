import image from './assets/acceuil-apropos.png';
import {useRef} from 'react';

import {GoogleLogin} from 'react-google-login';


const clientId = "889650749204-ro7qei6g1dg6e0313d85l687oab0dfnh.apps.googleusercontent.com";

const Acceuil = ({onSuccess, onFailure}) => {


    

    const ref = useRef(null);
    const handleClick = () => {
        ref.current?.scrollIntoView({behavior: 'smooth'});
    };

    

    


  return (
    <div>

        <div className="accueil">
            <h1 className="">Trouvez la maison de vos rêves</h1>

            <div className='accueil-btn-container'>

                <button onClick={handleClick} className="accueil-btn-gauche">A propos de nous</button>
                
            
                <div id="signInButton">
                    <GoogleLogin
                    className="accueil-btn-connecter"
                    clientId={clientId}
                    buttonText="Se connecter"
                    onSuccess={onSuccess}
                    onFailure={onFailure}
                    isSignedIn={true}
                    />
                </div>

                

            </div>
        </div>

        <div ref={ref} className="accueil-apropos">
            <img className='acceuil-apropos-image' src={image} alt="notre equipe" />
            <div className='acceuil-apropos-textes'>
                <h1>Vous êtes entre de bonnes mains</h1>
                <p>Torquatos nostros? quos dolores eos, qui dolorem ipsum per se texit, ne ferae quidem se repellere, idque instituit docere sic: omne animal, simul atque integre iudicante itaque aiunt hanc quasi involuta aperiri, altera occulta quaedam et voluptatem accusantium doloremque.</p>
            </div>
        </div>

    </div>
  )
}

export default Acceuil