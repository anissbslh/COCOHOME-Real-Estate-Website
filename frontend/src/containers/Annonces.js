import AI from "../components/AI"
import AIs from "../components/AIs";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";


const Annonces = () => {

  

  const [annonces, setAnnonces] = useState([]);

  useEffect( ()=> {
    const apiUrl = 'http://127.0.0.1:8000/api/annonces'
    fetch(apiUrl)
      .then((data) => data.json())
      .then((annonces) => setAnnonces(annonces));
  },[setAnnonces]);

  return (
    <div>
      <h1>ANNONCES !</h1>
      <h1>ANNONCES !</h1>
      <h1>ANNONCES !</h1>
    <div className="annonces-container">
      {annonces.map((annonce) => {
        return (
          <Link to={'annonces/'+annonce.annonceId}>
            <AI key={annonce.annonceId} categorie={annonce.categorie} type={annonce.typeDuBien} wilaya={annonce.wilaya} commune={annonce.commune} prix={annonce.prix} date={annonce.dateDePublication} image={annonce.image}/>
          </Link>
        )
      })}
    </div>
    </div>

  )
}

export default Annonces