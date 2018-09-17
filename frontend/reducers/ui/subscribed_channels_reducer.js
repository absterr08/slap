import { RECEIVE_CHANNELS_AND_DMS } from '../../actions/user_actions';
import { JOIN_CHANNEL, LEAVE_CHANNEL } from '../../actions/channel_actions';

export default (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CHANNELS_AND_DMS:
      return Object.keys(action.channels);
    case JOIN_CHANNEL:
      return state.concat(action.id);
    case LEAVE_CHANNEL:
      const idx = state.indexOf(action.id);
      const newState = Object.assign([], state);
      if (idx >= 0) {
        return newState.splice(idx, 1);
      } else {
        return newState;
      }
    default:
      return state;
  }
};
