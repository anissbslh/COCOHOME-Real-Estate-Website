import React, { useState } from 'react'
import './AI.css'
import AiDetails from './AiDetails';

function AI({categorie, type, wilaya, commune, prix, date, surface}) {

  const[detailsIsActive, setDetailsIsActive] = useState(false);

  const changeState = () => {
    setDetailsIsActive(!detailsIsActive);
  }

  return (
    <div>

      <div>
          {detailsIsActive && (<AiDetails detailsIsActive={detailsIsActive} setDetailsIsActive={setDetailsIsActive} categorie={categorie} type={type} wilaya={wilaya} commune={commune} prix={prix} date={date} surface={surface} />)}
      </div>

      <div className='ai'>
        <p><strong>{categorie}</strong></p>
        <img className='ai-img' src={ require(("./assets/annonces-assets/").concat(type).concat(".jpg")) } alt={type}/>
        <p>{commune}, {wilaya}</p>
        <p>{prix} DA</p>
        <button className='ai-details-btn' onClick={changeState}>Plus de détails</button>
    </div>

    </div>

  )
}

export default AI
