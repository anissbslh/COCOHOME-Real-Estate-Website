const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>COCOHOME</h1>
            <div className="links">
                <a href="/">ACCEUIL</a>
                <a href="/">A PROPOS</a>
                <a href="/">CONTACT</a>
                <a href="/" className="connect">SE CONNECTER</a>
            </div>
        </nav>
     );
}
 
export default Navbar;