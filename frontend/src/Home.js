import Recherche from "./Recherche"
import Deposer from "./Deposer"

const Home = () => {
  return (

    <div className="home">
        <div className="home-recherche">
            <h1>Trouvez votre chez vous</h1>
            <Recherche/>
        </div>

        <div className="home-deposer">
            <h1>Déposer une annonce</h1>
            <Deposer/>
        </div>
       
    </div>
  )
}

export default Home