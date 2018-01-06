import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { login } from '../../actions/session_actions'


const Splash = ({ demoLogin }) => (
  <div className="splash-container">
    <div className="splash-image"/>
    <div className="main-info">
      <h1>Productivity starts here</h1>
      <p>Whip your team into shape with Slap! A messaging app for teams that
        need a litle extra push in the right direction.</p>
      <div className="signup-button-container">
        <Link to="/signup" className="signup-btn">Get started</Link>
        <button onClick={demoLogin} className="signup-btn">Guest Login</button>
      </div>

      <p>Already using Slap?&nbsp;
      <Link to="/login" className="splash-link">Sign In</Link>
      </p>
    </div>
  </div>
);


const mapDispatchToProps = dispatch => (
  {
    demoLogin: () => dispatch(login({ username: 'guestUser', password: 'starwars' }))
  }
)

export default connect(null, mapDispatchToProps)(Splash);
