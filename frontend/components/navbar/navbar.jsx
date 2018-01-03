import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';


const NavBar = ({ username, logout }) => {

  return (
    <div className="nav-bar">
      <div className="nav-logo">
        <Link to="/" className="slap-logo" />
        <p className="slap-text">slap</p>
      </div>
    </div>
  )
};

export default NavBar;
