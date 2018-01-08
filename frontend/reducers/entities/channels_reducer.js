import merge from 'lodash/merge';
import { RECEIVE_CHANNELS, RECEIVE_CHANNEL } from '../../actions/channel_actions';

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CHANNELS:
      return merge({}, state, action.channels);

    case RECEIVE_CHANNEL:
      const channel = action.payload.channel;

      channel.messageIds = action.payload.messages.map(message => message.id);
      channel.userIds = action.payload.users.map(user => user.id);
      return merge({}, state, { [channel.id]: channel});

    default:
      return state;
  }
}

//access local storage in UI slice
//localStorage.setItem("currentChannel", )
