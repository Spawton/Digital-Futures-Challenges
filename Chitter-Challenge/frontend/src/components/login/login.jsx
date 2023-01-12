import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Header from '../Header/Header.jsx';
import Footer from '../Footer/Footer.jsx';



function Login({ setUserProp, setIsLoggedIn }) {

    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const login = async (e) => {
        e.preventDefault();

        const res = await axios.post(`http://localhost:4000/login`, { email, password, username });
        // alert(res.data.message);
        setUserProp(res.data.user);
        // setLogInProp(res.data.user ? true : false);

        if (res.data.user) {
            setIsLoggedIn(true);
            navigate("/user")
            // setUsername('');
            // setEmail('');
            // setPassword('');
        }
    };



    return (
        <>
            <Header />
            <section className="card text-center">
                <h1>Welcome to Chitter!</h1>
                <div className="login-form">
                    <form onSubmit={login} action='/user'>
                        <h2 className="text-center">Log in</h2>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Username" onChange={(event) => {
                                setUsername(event.target.value);
                            }}></input>
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Email" onChange={(event) => {
                                setEmail(event.target.value);
                            }}></input>
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control" placeholder="Password" onChange={(event) => {
                                setPassword(event.target.value);
                            }}></input>
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary btn-block" data-testid="log in">Log in</button>
                        </div>
                        <div className="clearfix">
                            <label className="float-left form-check-label"><input type="checkbox"></input> Remember me</label>
                        </div>
                    </form>
                    <p className="text-center">Don't have an account? <a href="/signup">Sign up here!</a></p>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Login;

