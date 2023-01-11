import { createContext, useContext, useEffect, useState } from 'react';

import {gapi} from 'gapi-script';

const clientId = "889650749204-ro7qei6g1dg6e0313d85l687oab0dfnh.apps.googleusercontent.com";




const AuthContext = createContext({
  auth: null,
  setAuth: () => {},
  user: null,
});

const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {


    const [auth, setAuth] = useState(null);
    const [user, setUser] = useState(null);

    useEffect(()=> {
        function start() {
          gapi.client.init({
            clientId : clientId,
            scope: ""
          })
        };
        gapi.load('client:auth2', start);
      });


    const onSuccess = (res) => {
        console.log("login cool, uuser : ",res.isSignedIn());
        setUser(res.profileObj);   
    }
    
    const onFailure = (res) => {
        console.log("login NOTcool, res : ",res);
        setUser(null);  
    }

   

    useEffect(() => {
        const isAuth = () => {
          
        };
        isAuth();
  }, [auth]);

  return (
    <AuthContext.Provider value={{auth, setAuth, user}}>
        {children}
    </AuthContext.Provider>
  )
};

export default AuthProvider;


