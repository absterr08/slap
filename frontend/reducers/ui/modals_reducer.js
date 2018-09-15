import merge from 'lodash/merge';
import {
  RECEIVE_NEW_CHANNEL_MODAL,
  RECEIVE_NEW_DM_MODAL,
  OPEN_CHANNEL_SEARCH_MODAL,
  CLOSE_CHANNEL_SEARCH_MODAL
} from '../../actions/modal_actions';
import { RECEIVE_CURRENT_USER } from '../../actions/session_actions'

const defaultState = {
  newChannel: false,
  newDM: false,
  channelSearch: false
};

export default (state = defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_NEW_CHANNEL_MODAL:
      return merge({}, state, { newChannel: !state.newChannel });
    case RECEIVE_NEW_DM_MODAL:
      return merge({}, state, { newDM: !state.newDM });
    case OPEN_CHANNEL_SEARCH_MODAL:
      return merge({}, defaultState, { channelSearch: true });
    case CLOSE_CHANNEL_SEARCH_MODAL:
      return merge({}, defaultState, { channelSearch: false });
    case RECEIVE_CURRENT_USER:
      return defaultState;
    default:
      return state;

  }
};
