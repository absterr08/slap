import merge from 'lodash/merge';
import { RECEIVE_CHANNELS, RECEIVE_CHANNEL } from '../../actions/channel_actions';
import { RECEIVE_CURRENT_USER } from '../../actions/user_actions'

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CHANNELS:
      return merge({}, state, action.channels.channels);
    case RECEIVE_CHANNEL:
      // debugger
      const channel = action.payload.channel;
      return merge({}, state, { [channel.id]: action.payload});
    case RECEIVE_CURRENT_USER:
      // debugger
      return {};
    default:
      return state;
  }
}

//access local storage in UI slice
//localStorage.setItem("currentChannel", )
