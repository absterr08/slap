import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
//testing
import * as sessionActions from './actions/session_actions';
import * as messageActions from './actions/message_actions';
import * as channelActions from './actions/channel_actions';
import * as userActions from './actions/user_actions';
import * as MessageAPIUtil from './util/message_api_util';
import * as UserAPIUtil from './util/user_api_util';
import * as ChannelAPIUtil from './util/channel_api_util';


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
  window.formatDateTime = MessageAPIUtil.formatDateTime;
  window.fetchUsers = userActions.fetchUsers;
  window.fetchUsersThenMessages = userActions.fetchUsersThenMessages;
  window.fetchUser = userActions.fetchUser;
  window.fetchChannels = channelActions.fetchChannels;
  window.fetchChannel = channelActions.fetchChannel;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
});
