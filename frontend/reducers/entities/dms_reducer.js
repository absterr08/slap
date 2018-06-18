import merge from 'lodash/merge';
import { RECEIVE_DMS, RECEIVE_DM, REMOVE_DM } from '../../actions/dm_actions';
import { RECEIVE_CHANNELS_AND_DMS } from '../../actions/user_actions';
import { RECEIVE_CURRENT_USER } from '../../actions/session_actions';
import { RECEIVE_MESSAGE } from '../../actions/message_actions';


export default (state = {}, action) => {
  Object.freeze(state);
  let dm;
  switch (action.type) {
    case RECEIVE_CHANNELS_AND_DMS:
    case RECEIVE_DMS:
      // return merge({}, state, action.channels);
      return action.dms || {};
    case RECEIVE_DM:
      dm = action.dm;
      return merge({}, state, { [dm.id]: dm });
    case RECEIVE_MESSAGE:
      if (action.message.messageable_type === "Dm") {
        dm = state[action.message.messageable_id];
        dm.messages.push(action.message.id);
        return merge({}, state);
      }
      return state;
    case REMOVE_DM:
      const newDms = merge({}, state);
      delete newDms[action.dmId];
      return newDms;
    case RECEIVE_CURRENT_USER:
      return {};
    default:
      return state;
  }
};

//access local storage in UI slice
//localStorage.setItem("currentChannel", )
