import './components/css/App.css';
import "./components/css/style.css";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import axios from 'axios';
// import mockNewsData from './mockNewsData.json';
import AllStories from "./components/AllStories.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Article from "./components/Article.jsx";
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';


function App() {

  // const [allNewsData, setallNewsData] = useState(mockNewsData.response.results);
  const [allNewsData, setAllNewsData] = useState([]);

  const getAllNewsData = async () => {
    try {
      const response = await axios.get(process.env.REACT_APP_GUARDIANNEWSDATAURL);
      setAllNewsData(response.data.response.results);
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    // setAllNewsData(mockNewsData.response.results)
    getAllNewsData()
  }, [])


  return (
    <Router>
      <div className='App'>
        <Header />
        <Routes>
          <Route path='/' element={<AllStories allNewsData={allNewsData} />} />
          <Route path='/Article/:id' element={<Article allNewsData={allNewsData} />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

AllStories.propTypes = {
  allNewsData: PropTypes.array.isRequired
}

export default App;
