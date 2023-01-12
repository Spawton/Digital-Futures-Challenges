import axios from 'axios';
import { useState } from 'react';
import Footer from '../Footer/Footer.jsx';
import Header from '../Header/Header.jsx';

const SignUp = () => {

    const [user, setUser] = useState({
        email: ``,
        password: ``,
        name: ``,
        username: ``,
    });

    const handleChange = e => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value
        });
    }

    const register = async (e) => {
        e.preventDefault();
        const { name, email, password, username } = user;
        if (email && password && name && username) {
            const res = await axios.post(`http://localhost:4000/signup`, user);
            setUser({ email: ``, password: ``, name: ``, username: `` });
            return;
        } else {
            alert(`Invalid input`);
        }
    }

    return (
        <>
            <Header />
            <section className="card text-center">
                <h1>Sign up to Chitter!</h1>
                <div className="signup-form">
                    <form onSubmit={register}>
                        <h2>Register</h2>
                        <p className="hint-text">Create your account. It's free and only takes a minute.</p>
                        <div className="form-group">
                            <div className="row">
                                <div className="col"><input type="text" className="form-control" name="name" placeholder="Name" required="required" value={user.name} onChange={handleChange}></input></div>
                                <div className="col"><input type="text" className="form-control" name="username" placeholder="Username" required="required" value={user.username} onChange={handleChange}></input></div>
                            </div>
                        </div>
                        <div className="form-group">
                            <input type="email" className="form-control" name="email" placeholder="Email" required="required" value={user.email} onChange={handleChange}></input>
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control" name="password" placeholder="Password" required="required" value={user.password} onChange={handleChange}></input>
                        </div>
                        <div className="form-group">
                            <label className="form-check-label">
                                <input type="checkbox" required="required"></input> I accept the <a href="#">Terms of Use</a> &amp; <a href="#">Privacy Policy</a></label>
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary btn-lg btn-block">Register Now</button>
                        </div>
                    </form>
                    <div className="text-center">Already have an account? <a href="/login">Sign in</a></div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default SignUp;
