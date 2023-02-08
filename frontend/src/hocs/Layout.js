import Navbar from "../components/Navbar";
import { useState } from "react";


const Layout = (props) => {

  const [auth, setAuth] = useState(false);
  const [user, setUser] = useState({});

  return (
    <div>
        <Navbar auth={auth} user={user}/>
        {props.children}
    </div>
  )
}

export default Layout