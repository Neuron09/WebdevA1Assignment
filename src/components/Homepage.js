import React from 'react';
import { Link } from 'react-router-dom'; 
import logo from './title.png';
import './homepage.css';
import picture from './pic1.jpg';

function Homepage() { 
  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <div className="logo-container">
            <img src={logo} className="App-logo" alt="logo" />
          </div>
          <Link to="/login" className="login">Login</Link>
        </div>
        <div className="picture-container">
          <div className="picture-title">
            <p className="article-title">* Article of the day *</p>
          </div>
          <div className="picture-with-text">
            <img src={picture} className="News-Article" alt="News Article" />
          </div>
          <div className="picture-summary">
            <Link to="/Summary1" className="more-warnings-link">Artificial intelligence could lead to extinction, experts warn</Link>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Homepage;
