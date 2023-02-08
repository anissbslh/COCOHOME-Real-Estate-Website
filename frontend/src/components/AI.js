import React from 'react'
import '../AI.css'

import { Link } from 'react-router-dom';

function AI({categorie, type, wilaya, commune, prix, date, image}) {

    return (
    <div className='ai'>

        <p><strong>{categorie}</strong></p>
        <img className='ai-img' src={image}/>
        <p>{commune}, {wilaya}</p>
        <p>{prix} DA</p>
        <Link className='ai-details-btn' >Plus de détails</Link>
    </div>
  )
}

export default AI