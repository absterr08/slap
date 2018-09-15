import { RECEIVE_SEARCHED_CHANNELS } from '../../actions/channel_actions';
import { CLOSE_CHANNEL_SEARCH_MODAL } from '../../actions/modal_actions';

export default (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SEARCHED_CHANNELS:
      return Object.keys(action.channels);
    case CLOSE_CHANNEL_SEARCH_MODAL:
      return [];
    default:
      return state;
  }
};
