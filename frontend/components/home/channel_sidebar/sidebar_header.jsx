import { connect } from 'react-redux';
import React from 'react';
import { Link, Route } from 'react-router-dom';
import { logout } from '../../../actions/session_actions';


const ChannelSidebar = ({ username, logout }) => {
    return (
      <div className="channel-sidebar-header">
        <h1 className="username">{username}</h1>
        <button className="logout" onClick={logout}>Log Out</button>
      </div>
    )
};

const mapStateToProps = (state, ownProps) => {
  return {
    username: state.session.currentUser.user.username
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChannelSidebar);
