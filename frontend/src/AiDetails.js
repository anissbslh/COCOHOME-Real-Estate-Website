import React from 'react'
import './AiDetails.css'
import { IoArrowBackOutline } from 'react-icons/io5'

function AiDetails({detailsIsActive, setDetailsIsActive, categorie, type, wilaya, commune, prix, date, surface}) {

  const changeState = () => {
    setDetailsIsActive(!detailsIsActive);
  }

  return (

    <div>
    { detailsIsActive && (
    
    
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
                      <strong>{categorie} {type}</strong>
                      <br/>
                      {wilaya}, {commune}
                      <br/>
                      {surface} m²
                    </div>
          
                    <div className="partie-gauche">
                    <strong>{prix} DA</strong>
                    </div>
                  
                  </div>
                  
                  <div className="img-details">
                    <img className='img-details' src={require("./assets/annonces-assets/Villa.jpg")} alt="photo"/>
                    Pictures
                  </div>
                  
                  <div className="description-details">
                  <br/> Description : <br/> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <br/>
                  <br/> Description : <br/> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <br/>
                  <br/> Description : <br/> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <br/>
                  <br/> Description : <br/> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <br/>
                  <br/> Description : <br/> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <br/>

                  </div>
              
              </div>

              <div className="offer-details">
              
                <button className='offer-btns'>Voir profil</button>
                <button className='offer-btns'>Sauvegarder l'annonce</button>
                <button className='offer-btns'>Afficher la localisation sur Maps</button>
                <button className='offer-btns'>Email</button>
                <textarea className="the-offer">
                  Ecrire votre message et faire une offre
                </textarea>
                <button className='offer-btns'>Submit</button>

              </div>
          
          
          
          </div>

          
        </div>
          
        </div>

    
    </div>
    
    )}
    
    
    </div>

  )
}


export default AiDetails