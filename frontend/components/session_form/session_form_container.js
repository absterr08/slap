import { connect } from 'react-redux';
import React from 'react';
import SessionForm from './session_form';
import {login, signup} from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    loggedIn: !!state.session.currentUser,
    formType: ownProps.match.path === "/signup" ? "signup" : "login"
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const action = ownProps.match.path === "/signup" ? signup : login
  return {
    processForm: user => dispatch(action(user))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
