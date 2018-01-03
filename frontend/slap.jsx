import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store'
import Root from './components/root'
//testing
import * as SessionAPIUtil from './actions/session_actions';


document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  let store;
  if (window.currentUser) {
    const preloadedState = { session: window.currentUser }
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  ReactDOM.render(<Root store={store}/>, root);

  //testing
  window.signup = SessionAPIUtil.signup;
  window.logout = SessionAPIUtil.logout;
  window.login = SessionAPIUtil.login;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
});
