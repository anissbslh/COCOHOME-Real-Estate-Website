import { Link, NavLink } from "react-router-dom";
import {Fragment} from 'react';
import { connect } from "react-redux";
import { logout } from "../actions/auth";
import Alert from './Alert';
import PropTypes from 'prop-types'



const Navbar = () => {

    const authLinks = (
        <Fragment>
            <Link to="/profil">{"AAA"}</Link>
            <a onClick={logout} href="/">Se déconnecter</a>
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
                    <Link to="/annonces">Annonces</Link>
                    <Fragment>{false ? authLinks : guestLinks}</Fragment>
                </div>
            </nav>
            <Alert/>
        </Fragment>
    );
}

Navbar.propTypes = {
    auth : PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth
});
 
export default connect(mapStateToProps, {logout})(Navbar);