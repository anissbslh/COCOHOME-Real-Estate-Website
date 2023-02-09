import image from '../assets/acceuil-apropos.png';
import {useRef, useState, useEffect} from 'react';

import {GoogleLogin} from 'react-google-login';
import GoogleAuth from '../GoogleAuth';
import { Link, Redirect } from "react-router-dom";

import Navbar from '../components/Navbar';
import Home from './Home';
import Profil from './Profil';
import Recherche from '../components/Recherche';
import Deposer from '../components/Deposer';


const clientId = "889650749204-ro7qei6g1dg6e0313d85l687oab0dfnh.apps.googleusercontent.com";

const Acceuil = () => {


    const loadScript = (src) =>
  new Promise((resolve, reject) => {
    if (document.querySelector(`script[src="${src}"]`)) return resolve()
    const script = document.createElement('script')
    script.src = src
    script.onload = () => resolve()
    script.onerror = (err) => reject(err)
    document.body.appendChild(script)
  })

  const [auth, setAuth] = useState(false);
  const [email, setEmail] = useState('');

  const googleButton = useRef(null);

  useEffect(() => {
    const src = 'https://accounts.google.com/gsi/client'
    const id = "889650749204-p6lue5mpc1nhubuj6mh57vmf3po5dpeo.apps.googleusercontent.com"

    loadScript(src)
      .then(() => {
      
        /*global google*/
        
        google.accounts.id.initialize({
          client_id: id,
          callback: handleCredentialResponse,
        })
        google.accounts.id.renderButton(
          googleButton.current,
          { theme: 'outline', size: 'large' }
        )
      })
      .catch(console.error)

    return () => {
      const scriptTag = document.querySelector(`script[src="${src}"]`)
      if (scriptTag) document.body.removeChild(scriptTag)
    }
  }, [])

  
  function handleCredentialResponse(response) {
      if (response.credential) {
        var data = { "auth_token": response.credential }

       
        fetch("http://127.0.0.1:8000/google/",
          {
            method: "post",
            body: JSON.stringify(data),
            headers: {
              'Content-Type': 'application/json; charset=utf-8'
            }
          })
          .then((res) => res.json())
          .then((res) => {
            console.log(res);
            document.getElementById("email_id").innerText=res['email']
            document.getElementById("auth_token").innerText=res['tokens']
  
            setEmail(res['email'])
            setAuth(true)
            
            console.log(email);
            console.log(auth);

            

            
            

  
          })
  
      }
  }
 


if (!auth) {
    return (
        <div>
                <Navbar auth={auth} email ={email}/>
    
    
                        <div>

                                    <div className="accueil">
                                        <h1 className="">Trouvez la maison de vos rêves</h1>

                                        <div className='accueil-btn-container'>

                                        <div id='google-login-btn'>
                                <div ref={googleButton} id='google-ref'></div>
                                <div>
                                <div>
                                <label>Email Id:</label>
                                <label id='email_id'></label>
                                </div>
                                <div>
                                    <label>Auth token:</label>
                                    <label id='auth_token'></label>
                                </div>

                        </div>

                        </div>

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
    </div>
    )
}
else {
    return (
        <div>
        <Navbar auth={auth} email ={email}/>
        <div className="home">
        <div className="home-recherche">
            <h1>Trouvez votre chez vous</h1>
            
            <Recherche/>
        </div>


        {/* <div className="filtrage">
            <Filtre/>
        </div> */}

        <div className="home-deposer">
            <h1>Déposer une annonce</h1>
            <Deposer email={email}/>
        </div>
       
    </div>
        <Profil email={email}/>

        </div>
    )
}

  
}

export default Acceuil