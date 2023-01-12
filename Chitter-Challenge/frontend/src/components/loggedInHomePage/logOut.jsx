import { Link } from 'react-router-dom';

const LogOut = ({ setIsLoggedIn }) => {

    return (
        <>
            <nav>
                <Link to="/" onClick={() => setIsLoggedIn(false)} >Log Out</Link>
            </nav>
        </>
    )
}

export default LogOut; 