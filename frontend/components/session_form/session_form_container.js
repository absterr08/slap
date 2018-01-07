import { connect } from 'react-redux';
import React from 'react';
import SessionForm from './session_form';
import {login, signup, receiveSessionErrors} from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    loggedIn: !!state.session.currentUser,
    formType: ownProps.match.path === "/signup/:email" ? "signup" : "login",
    errors: state.errors.session
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const action = ownProps.match.path === "/signup/:email" ? signup : login;
  return {
    processForm: user => dispatch(action(user)),
    clearErrors: () => dispatch(receiveSessionErrors(""))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
