import { Link, NavLink } from "react-router-dom";
import {Fragment} from 'react';
import { connect } from "react-redux";
import { logout } from "../actions/auth";
import Alert from './Alert';
import PropTypes from 'prop-types'



const Navbar = ({auth, email}) => {

    const authLinks = (
        <Fragment>
            <Link to="/profil">{email}</Link>
            <Link to="/annonces">Annonces</Link>
            <a onClick={logout} href="/">deco</a>
        </Fragment>
    );

    const guestLinks = (
        <Fragment>
            
        </Fragment>
    )


    return (
        <Fragment>
            <nav className="navbar">
                <div>
                    <h1>COCOHOME</h1>
                </div>
    
                <div className="links">
                    <Link to="/">Accueil</Link>
                    
                    <Fragment>{auth ? authLinks : guestLinks}</Fragment>
                </div>
            </nav>
            <Alert/>
        </Fragment>
    );
}


const mapStateToProps = state => ({
    auth: state.auth
});
 
export default connect(mapStateToProps, {logout})(Navbar);