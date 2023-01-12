import { NavLink } from "react-router-dom";

const Header = () => {
    return (

        <header>
            <nav className="navbar navbar-expand-lg ms-auto">
                <div className="container-fluid justify-content-start">
                    <h1 className="headerh4">CHITTER</h1>
                </div>
                <div className="container-fluid justify-content-end">
                    <NavLink to="/" className="headernavlink">Home</NavLink>
                    <NavLink to="/login" className="headernavlink">Log In</NavLink>
                    <NavLink to="/signup" className="headernavlink">Sign Up</NavLink>
                </div>
            </nav>
        </header >
    );
}

export default Header;