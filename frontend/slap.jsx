import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store'
//testing
import * as SessionAPIUtil from './actions/session_actions';


document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  const store = configureStore();
  ReactDOM.render(<h1>Welcome to Slap</h1>, root);

  //testing
  window.signup = SessionAPIUtil.signup;
  window.logout = SessionAPIUtil.logout;
  window.login = SessionAPIUtil.login;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
});
