import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login, guestSignup } from '../../actions/session_actions';


const NavBar = ({ guestSignup, loggedIn }) => {
  if (loggedIn) return <div></div>;

  return (
    <div className="nav-bar">
      <div className="nav-logo">
        <Link to="/" className="slap-logo" />
        <p className="slap-text">slap</p>
      </div>
      <button onClick={ guestSignup } className="guest-btn">Guest Login</button>
    </div>
  );
};


const mapStateToProps = state => {
  return {
    loggedIn: Boolean(state.session.currentUser)
  };
};

const mapDispatchToProps = dispatch => (
  {
    demoLogin: () => dispatch(login({ username: 'guestUser', password: 'starwars' })),
    guestSignup: () => dispatch(guestSignup())
  }
)

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
