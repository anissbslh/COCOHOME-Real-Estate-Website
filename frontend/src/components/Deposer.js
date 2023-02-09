import { useState } from "react";
import axios from "axios";
import donnees_communes from '../donnees_communes.json'
import { useHistory } from "react-router-dom";
import axiosInstance from "../axios";

const Deposer = ({email}) => {

    const [annonceData, setAnnonceData] = useState({
        titre : '',
        categorie : '',
        typeDuBien : '',
        surface : '',
        description : '',
        prix : '',
        adresse : '',
        user : 2,
        wilaya : 'Adrar',
        commune : '',       
        dateDePublication : '14-02'
    });

    const [annonceImage, setAnnonceImage] = useState(null)

    const onChange = (e) => {

        if ([e.target.name] == 'image') {
            setAnnonceImage({
                image : e.target.files,
            });
        }
        else {
            setAnnonceData({
                 ...annonceData, 
                 [e.target.name]: e.target.value.trim() 
            });
        }

        
    }

    




    const history = useHistory();

    const onSubmit = (e) => {
        e.preventDefault();

        const config = {headers : {
            'Content-Type' : 'multipart/form-data'
        }};
        const URL = 'http://localhost:8000/api/admin/create';

        let formData=new FormData();

        formData.append('titre', annonceData.titre);
        formData.append('categorie', annonceData.categorie);
        formData.append('typeDuBien', annonceData.typeDuBien);
        formData.append('surface', annonceData.surface);
        formData.append('description', annonceData.description);
        formData.append('prix', annonceData.prix);
        formData.append('adresse', annonceData.adresse);
        formData.append('wilaya', annonceData.wilaya);
        formData.append('commune', annonceData.commune);
        formData.append('user', annonceData.user);
        formData.append('image', annonceImage.image[0]);
        axios
        .post(URL, formData, config)
        .then((res)=>{
            console.log(res.data);
        })
        .catch((err)=>console.log(err));
    
    }

    // const wilayas = ['Adrar','Chlef','Laghouat','Oum El Bouaghi','Batna','Béjaïa','Biskra'
    // ,'Béchar','Blida','Bouira','Tamanrasset','Tébessa','Tlemcen','Tiaret','Tizi Ouzou','Alger','Djelfa','Jijel','Sétif','Saïda','Skikda','Sidi Bel Abbés','Annaba'
    // ,'Guelma','Constantine','Médéa','Mostaganem',"M'sila",'Mascara','Ouargla','Oran','El Bayadh','Illizi','Bordj Bou Arreridj','Boumerdès','El Tarf','Tindouf','Tissemsilt','El Oued','Khenchela','Souk Ahras','Tipaza'
    // ,'Mila','Aïn Defla','Naâma','Aïn Témouchent','Ghardaïa','Relizane','Timimoun','Bordj Badji Mokhtar','Ouled Djellal','Béni Abbès','In Salah','In Guezzam','Touggourt','Djanet',"El M'Ghair",'El Meniaa']

    const wilaya = []
    donnees_communes.map((truc)=>{
        wilaya.push(truc.wilaya)
    })

    
    var wilayas = Array.from(new Set(wilaya));

  return (
    <div className="deposer">
    <form onSubmit={onSubmit}>
        <div>
            <label>Titre</label>
            <input type="text" name="titre" onChange={e => onChange(e)} value={annonceData.titre}/>
        </div>
        <div>
            <label>Catégorie de l'annonce :</label>
            <select name="categorie" onChange={e => onChange(e)} value={annonceData.categorie}>
                <option value="vente">Vente</option>
                <option value="echange">Echange</option>
                <option value="location">Location</option>
                <option value="location pour vancances">Location pour vancances</option>
            </select>
        </div>

        <div>
            <label>Type du bien immobilier :</label>
            <select name = "typeDuBien" onChange={e => onChange(e)} value={annonceData.typeDuBien}>
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
            <input required type="number" name = "surface" onChange={e => onChange(e)} value={annonceData.surface}/>
        </div>

        <div>
            <label>Description du bien immobilier :</label>
            <textarea required name = "description" onChange={e => onChange(e)} value={annonceData.description}></textarea>
        </div>

        <div>
            <label>Prix :</label>
            <input type="number" name="prix" onChange={e => onChange(e)} value={annonceData.prix}/>
        </div>
        <div>
            <label>Adresse</label>
            <input type="text" name = "adresse" onChange={e => onChange(e)} value={annonceData.adresse}/>
        </div>
        
        <div>
            <label>Wilaya</label>
            <select name = "wilaya" onChange={e => onChange(e)} value={annonceData.wilaya}>
                {wilayas.map((option) => (
                <option value={option}>{option}</option>
            ))}

                

            </select>
        </div>
        <div>
            <label>Commune</label>
            <select name = "commune" onChange={e => onChange(e)} value={annonceData.commune}>
                {donnees_communes.map((option) => 
                     (

                <option value={option.commune}> {option.commune} </option>
            )
            )}
            </select>
        </div>

        <div>
            <label>Photos du bien immobilier :</label>
            <input type="file" name = "image" onChange={e => onChange(e)} />
        </div>

        <div>
            <button className="btn-deposer" >Publier</button>
        </div>

    </form>
    </div>
  )
}

export default Deposer