import AddPeep from "./addPeep";
import Header from "../Header/Header"
import Footer from "../Footer/Footer";
import LogOut from "./logOut";

const LoggedInHome = ({ messageProp, userProp, setIsLoggedIn }) => {

    return (
        <>
            <Header />
            <AddPeep userProp={userProp} />
            <LogOut setIsLoggedIn={setIsLoggedIn} />
            <Footer />
        </>
    )
}

export default LoggedInHome; 