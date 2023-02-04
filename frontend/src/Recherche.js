import { useState } from "react"

const Recherche = () => {

    const [motsCles, setMotsCles] = useState("Une maison à Alger Centre")

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const res = await axios.get('/api/search_annonces/', {
            params: {
            title: motsCles,
            categ: categ,
            type: type,
            //wilaya:wilaya,
            min_price: minPrice,
            max_price: maxPrice,
            },
        });
    
        setResults(res.data);
        };
    
  return (
    <div className="recherche">
        <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Mots clés" value={motsCles} onChange={e => setMotsCles(e.target.value)} />
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