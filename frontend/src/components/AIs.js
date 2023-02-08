import AI from './AI';

const AIs = ({ annonces }) => {

    const getAnnonces = () => {
        let annoncesOnPage = [];
        let result = [];

        annonces.map(annonce => {
            return annoncesOnPage.push(
                <AI

                    categorie = {annonce.categorie}
                    type = {annonce.type}
                    wilaya = {annonce.wilaya}
                    commune = {annonce.commune}
                    prix = {annonce.prix}
                    date = {annonce.date}
                />
            );
        });

        for (let i = 0; i < annonces.length; i += 3) {
            result.push(
                <div>
                    <div>
                        {annoncesOnPage[i]}
                    </div>
                    <div className='col-1-of-3'>
                    {annoncesOnPage[i+1] ? annoncesOnPage[i+1] : null}
                    </div>
                    <div className='col-1-of-3'>
                    {annoncesOnPage[i+2] ? annoncesOnPage[i+2] : null}
                    </div>
                </div>
            );
        }

        return result;
    };

    return (
        <div>
            {getAnnonces()}
        </div>
    );
}

export default AIs;