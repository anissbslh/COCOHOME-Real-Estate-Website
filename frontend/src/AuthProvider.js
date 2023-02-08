import { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext({
  auth: null,
  setAuth: () => {},
  user: null,
});

const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {


    const [auth, setAuth] = useState(null);
    const [user, setUser] = useState(null);
    
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
