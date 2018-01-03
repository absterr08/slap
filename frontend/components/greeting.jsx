import { connect } from 'react-redux';
import React from 'react';
import { Link, Route } from 'react-router-dom';
import { logout } from '../actions/session_actions';


const Greeting = ({ username, logout }) => {
  if (!username) {
    return (
      <div>
        <Link to="/signup" >Sign Up!</Link>
        <br/>
        <Link to="/login" >Log In!</Link>
      </div>
    );
  } else {
    return (
      <div className="greeting">
        <h1>Hi, {username}</h1>
        <button onClick={logout}>Log Out</button>
      </div>
    )
  }
};

const mapStateToProps = (state, ownProps) => {
  return {
    username: state.session.currentUser ? state.session.currentUser.username : ""
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);
