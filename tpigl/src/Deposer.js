const Deposer = () => {
  return (
    <div className="deposer">
    <form >
        <div>
            <label>Catégorie de l'annonce :</label>
            <select>
                <option value="vente">Vente</option>
                <option value="echange">Echange</option>
                <option value="location">Location</option>
                <option value="location pour vancances">Location pour vancances</option>
            </select>
        </div>

        <div>
            <label>Type du bien immobilier :</label>
            <select>
                <option value="terrain">Terrain</option>
                <option value="terrain agricole">Terrain agricole</option>
                <option value="appartement">Appartement</option>
                <option value="maison">Maison</option>
                <option value="bungalow">Bungalow</option>
                <option value="autres">Autres</option>
            </select>
        </div>

        <div>
            <label>Surface en m² :</label>
            <input required type="number"/>
        </div>

        <div>
            <label>Description du bien immobilier :</label>
            <textarea required></textarea>
        </div>

        <div>
            <label>Prix :</label>
            <input type="number" name="" id="" />
        </div>

        <div>
            <label>Localisation du bien</label>
            <input type="text" />
        </div>

        <div>
            <label>Photos du bien immobilier :</label>
            <input type="file"/>
        </div>

        <div>
            <label>Contact de l'annonceur :</label>
            <input type="tel"/>
        </div>

        <div>
            <button className="btn-deposer">Publier</button>
        </div>

    </form>
    </div>
  )
}

export default Deposer