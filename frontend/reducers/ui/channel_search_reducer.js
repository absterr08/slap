import { RECEIVE_SEARCHED_CHANNELS } from '../../actions/channel_actions';

export default (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SEARCHED_CHANNELS:
      return Object.keys(action.channels);
    default:
      return state;
  }
};
