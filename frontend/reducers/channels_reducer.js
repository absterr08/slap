import merge from 'lodash/merge';
import { RECEIVE_CHANNELS, RECEIVE_CHANNEL } from './actions/channel_actions';

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CHANNELS:
      return merge({}, state, action.channels);
    case RECEIVE_CHANNEL:
      const channel = action.payload.channel;
      channel.message_ids = action.payload.items.map(item => item.id);
      return merge({}, state, { [action.id]})
    defalt:
      return state;
  }
}
