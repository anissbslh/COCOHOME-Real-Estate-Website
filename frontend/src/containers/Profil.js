import {GoogleLogout} from 'react-google-login';

const clientId = "889650749204-ro7qei6g1dg6e0313d85l687oab0dfnh.apps.googleusercontent.com";


const Profil = ({email}) => {


  



  return (
    <div className="profil-container">

      <div className="profil-profil">
        
        {/* <div id="signOutButton">
                    <GoogleLogout
                    className="accueil-btn-connecter"
                    clientId={clientId}
                    buttonText="deco :/"
                    onLogoutSuccess={onLogoutSuccess}
                    />
                </div> */}

           <h1>{email}</h1> 
      </div>

      <div className="profil-menu">
        <div className="profil-section">
          <h2>Mes Anonnces</h2>
          <p>zfnifijfioejfif</p>
        </div>
        

        <div className="profil-section">
          <h2>Messagerie</h2>
        </div>
      </div>
    </div>
    
  )
}

export default Profil