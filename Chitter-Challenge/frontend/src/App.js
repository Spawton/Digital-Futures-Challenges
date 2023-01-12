import './App.css';
import HomePage from './components/homepage/HomePage';
import Login from './components/login/login';
import SignUp from './components/signUp/signUp';
import LoggedInHome from './components/loggedInHomePage/loggedInHome'
import './components/css/style.css';
import "bootstrap/dist/css/bootstrap.min.css";


import axios from 'axios';

import { useState, useEffect } from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


const App = () => {

  const [user, setUser] = useState({});

  const [messages, setMessages] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const getMessages = async () => {
    await axios.get(`http://localhost:4000/`)
      .then(res => {
        console.log(res.data);
        setMessages(res.data.reverse())
      });
  }

  useEffect(() => {
    getMessages()
  }, [])

  const setLoggedInHandler = logInState => {
    console.log(logInState);
    setIsLoggedIn(logInState);
  }

  const setUserHandler = user => {
    setUser(user);
  }

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route index element={<HomePage messageProp={messages} />} />
          <Route path="/login" element={<Login setUserProp={setUserHandler} setIsLoggedIn={setLoggedInHandler} />} />7
          <Route path="/signup" element={<SignUp />} />
          <Route path="/user" element={isLoggedIn === true ? <LoggedInHome userProp={user} messageProp={messages} setIsLoggedIn={setLoggedInHandler} /> : <Login setUserProp={setUser} setIsLoggedIn={setLoggedInHandler} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
