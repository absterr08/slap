import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login, guestSignup } from '../../actions/session_actions';


const NavBar = ({ guestSignup }) => {

  return (
    <div className="nav-bar">
      <div className="nav-logo">
        <Link to="/" className="slap-logo" />
        <p className="slap-text">slap</p>
      </div>
      <button onClick={guestSignup} className="guest-btn">Guest Login</button>
    </div>
  );
};


const mapDispatchToProps = dispatch => (
  {
    demoLogin: () => dispatch(login({ username: 'guestUser', password: 'starwars' })),
    guestSignup: () => dispatch(guestSignup())
  }
)

export default connect(null, mapDispatchToProps)(NavBar);
