import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <nav>
                <h1>DFX News</h1>
                <NavLink to="/" className={isActive =>
                    "nav-link" + (!isActive ? " unselected" : "")}>
                    Home
                </NavLink>
            </nav>
        </header>
    );
}

export default Header;