import React from 'react';
import { Link } from 'react-router-dom';
import SplashContainer from './splash_container';


const Splash = () => (
  <div className="splash-container">
    <div className="splash-image"/>
    <div className="main-info">
      <h1>Productivity starts here</h1>
      <p>Whip your team into shape with slap! A messaging app for teams that
        need a litle extra push in the right direction.</p>
      <Link to="/signup" className="demo-btn">Get started</Link>

      <p>Already using Slap?&nbsp;
      <Link to="/login" className="splash-link">Sign In</Link>
      </p>
    </div>
  </div>
);

export default Splash;
