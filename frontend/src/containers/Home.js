import Recherche from "../components/Recherche"
import Deposer from "../components/Deposer"
import Filtre from "../components/Filtre"

import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import AI from '../components/AI';
import Pagination from '../components/Pagination';

const Home = () => {

  const [annonces, setAnnonces] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [annoncesParPage, setAnnoncesParPage] = useState(3);
  const [active, setActive] = useState(1);

  const indexOfLastAnnonce = currentPage * annoncesParPage;
  const indexOfFirstAnnonce = indexOfLastAnnonce - annoncesParPage;
  const currentAnnonces =  annonces.slice(indexOfFirstAnnonce, indexOfLastAnnonce);


  return (

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
            <Deposer/>
        </div>
       
    </div>
  )
}

export default Home