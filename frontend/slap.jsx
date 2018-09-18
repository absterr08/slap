import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
//testing
import * as sessionActions from './actions/session_actions';
import * as messageActions from './actions/message_actions';
import * as channelActions from './actions/channel_actions';
import * as userActions from './actions/user_actions';
import * as modalActions from './actions/modal_actions';
import * as MessageApiUtil from './util/message_api_util';
import * as UserApiUtil from './util/user_api_util';
import * as SessionApiUtil from './util/session_api_util';
import * as ChannelApiUtil from './util/channel_api_util';


document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  let store;
  if (window.currentUser) {
    const preloadedState = {
      session: { currentUser: window.currentUser },
      ui: {
        currentChannel: {
          type: 'Channel',
          id: window.currentUser.defaultChannel,
        },
        defaultChannel: window.defaultChannel
       }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  ReactDOM.render(<Root store={store}/>, root);

  //testing
  window.searchUsers = userActions.searchUsers
  window.searchChannels = channelActions.searchChannels


  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.SessionApiUtil = SessionApiUtil;
});
