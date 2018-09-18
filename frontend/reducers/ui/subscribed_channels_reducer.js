import { RECEIVE_CHANNELS_AND_DMS } from '../../actions/user_actions';
import { JOIN_CHANNEL, LEAVE_CHANNEL, RECEIVE_CHANNEL } from '../../actions/channel_actions';

export default (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CHANNELS_AND_DMS:
      return Object.keys(action.channels).map(key => parseInt(key));
    case RECEIVE_CHANNEL:
      return state.concat(action.channel.id);
    case JOIN_CHANNEL:
      return state.concat(action.id);
    case LEAVE_CHANNEL:
      const idx = state.indexOf(action.id);
      const newState = Object.assign([], state);
      if (idx >= 0) {
        newState.splice(idx, 1);
      }
      return newState;
    default:
      return state;
  }
};
