import AllMessages from "./AllMessages";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";


const HomePage = ({ messageProp }) => {

    return (
        <>
            <Header />
            <h1>Welcome to Chitter!</h1>
            <AllMessages messageProp={messageProp} />
            <Footer />
        </>
    )
}

export default HomePage;               