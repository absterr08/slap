import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login } from '../../actions/session_actions';


const NavBar = ({ demoLogin }) => {

  return (
    <div className="nav-bar">
      <div className="nav-logo">
        <Link to="/" className="slap-logo" />
        <p className="slap-text">slap</p>
      </div>
      <button onClick={demoLogin} className="guest-btn">Guest Login</button>
    </div>
  );
};


const mapDispatchToProps = dispatch => (
  {
    demoLogin: () => dispatch(login({ username: 'guestUser', password: 'starwars' }))
  }
)

export default connect(null, mapDispatchToProps)(NavBar);
