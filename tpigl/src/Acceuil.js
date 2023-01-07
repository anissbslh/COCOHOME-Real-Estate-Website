import image from './assets/acceuil-apropos.png'

const Acceuil = () => {
  return (
    <div>

        <div className="accueil">
            <h1 className="">Trouvez la maison de vos rêves</h1>
            <button className="accueil-btn-gauche">A propos de nous</button>
            <button className="accueil-btn-droite">Se connecter</button>
        </div>

        <div className="accueil-apropos">
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