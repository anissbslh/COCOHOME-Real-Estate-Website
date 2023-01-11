import { useState } from "react"

const Recherche = () => {

    const [motsCles, setMotsCles] = useState("Une maison à Alger Centre")
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    
  return (
    <div className="recherche">
        <form onSubmit={handleSubmit}>
            <label>Faire une recherche par mots-clés :</label>
            <div className="recherche-barre">
                <input 
                    type="text"
                    required
                    value={motsCles}
                    onChange = {(e)=> setMotsCles(e.target.value)}
                />
                <button>Recherche</button>
            </div>
        </form>
    </div>
  )
}

export default Recherche