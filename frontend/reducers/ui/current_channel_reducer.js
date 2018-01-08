import { RECEIVE_CHANNEL } from '../../actions/channel_actions';

export default (state = null, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CHANNEL:
      const currentChannel = action.payload.channel.id;
      localStorage.setItem("currentChannel", `${currentChannel}`);
      return currentChannel;
    default:
      return state;
  }
};
