import { IoArrowBackOutline } from 'react-icons/io5'

/////////
import { useAuthState } from 'react-firebase-hooks/auth'
import firebase from '../firebase-config.js';
import { auth } from '../firebase-config.js';
import Chat from '../components/Chat.js';
import {Link, Route} from 'react-router-dom'

import { useParams } from 'react-router-dom';
import AxiosInstance from '../axios.js';
import { useState, useEffect } from 'react';
/////////


function AnnonceDetails() {

  const changeState = () => {
    
  }

  const [user]= useAuthState(auth)

  const {annonceId} = useParams();

  const [data, setData] = useState({annonces: []});

  useEffect(()=>{
    AxiosInstance.get('annonces/'+annonceId).then((res)=> {
      setData({annonces: res.data});
      console.log(res.data);
    });
  }, [setData]);

  return (

    <div>
    
    
    <div className='over-overlay'>

        <div className='overlay'>

        <div className='ai-details'>

          <button className="cancel-btn" onClick={changeState}>
            <IoArrowBackOutline/>
            <div>Retour</div>
          </button>
          
          <div className="container-details">

              <div className="details-details">

                  <div className="head-details">
            
                    <div className="partie-droite">
                      <strong>{data.annonces.categorie} {data.annonces.typeDuBien}</strong>
                      <br/>
                      {data.annonces.wilaya}, {data.annonces.commune}
                      <br/>
                      {data.annonces.surface} m²
                    </div>
          
                    <div className="partie-gauche">
                    <strong>{data.annonces.prix} DA</strong>
                    </div>
                  
                  </div>
                  
                  <div className="img-details">
                    <img className='img-details' src={data.annonces.image} alt="photo"/>
                    Pictures
                  </div>
                  
                  <div className="description-details">
                  {data.annonces.description}
                  </div>
              
              </div>

              <div className="offer-details">
              
                <button className='offer-btns'>Voir profil</button>
                <button className='offer-btns'>Sauvegarder l'annonce</button>
                <button className='offer-btns'>Afficher la localisation sur Maps</button>
                <Link to={`/chat/${user}`}>
                  <button className='offer-btns'>Contacter l'annonceur</button>
                </Link>
                <Route path="/chat" component={Chat} />
                
                
                <textarea className="the-offer">
                  Ecrire votre message et faire une offre
                </textarea>
                <button className='offer-btns'>Submit</button>

              </div>
          
          
          
          </div>

          
        </div>
          
        </div>

    
    </div>
    
    
    
    </div>

  )
}


export default AnnonceDetails