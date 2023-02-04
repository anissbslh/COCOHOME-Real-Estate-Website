import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ResultList = () => {
  const [annonces, setAnnonces] = useState([]);

  useEffect(() => {
    const fetchData = async () => {

        /* useEffect pour envoyer une requête GET 
        à l'API Django en utilisant Axios*/
      const result = await axios.get('http://localhost:8000/api/annonces');
      setAnnonces(result.data);
    };
    fetchData();
  }, []);


/* le composant affiche les résultats de la recherche en utilisant 
la méthode map pour parcourir le tableau annonces et 
afficher les propriétés de chaque annonce */
  return (
    <ul>
      {annonces.map(annonce => (
        <li key={annonce.id}>
          <h3>{annonce.titre}</h3>
          <p>{annonce.description}</p>
        </li>
      ))}
    </ul>
  );
};

export default ResultList;