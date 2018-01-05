import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
//testing
import * as sessionActions from './actions/session_actions';
import * as messageActions from './actions/message_actions';


document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  let store;
  if (window.currentUser) {
    const preloadedState = { session: {currentUser: window.currentUser } };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  ReactDOM.render(<Root store={store}/>, root);

  //testing
  window.signup = sessionActions.signup;
  window.logout = sessionActions.logout;
  window.login = sessionActions.login;
  window.fetchMessages = messageActions.fetchMessages;
  window.fetchMessage = messageActions.fetchMessage;
  window.createMessage = messageActions.createMessage;
  window.updateMessage = messageActions.updateMessage;
  window.addLastMessage = messageActions.addLastMessage;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
});
