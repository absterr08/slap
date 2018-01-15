import { values } from 'lodash';

export const selectCurrentChannel = state => {
  // debugger
  return state.entities.channels[state.ui.currentChannel] ||
  state.session.currentUser.defaultChannel
}

export const selectDms = state => {
  const dms = values(state.entities.channels).reduce((acc, channel) => {
    if (channel.is_dm) {
      acc[channel.id] = channel;
    }
    return acc;
  }, {});
  return values(dms);
};

export const selectPublicChannels = state => {
  const publicChannels = values(state.entities.channels).reduce((acc, channel) => {
    if (!channel.is_dm) {
      acc[channel.id] = channel;
    }
    return acc;
  }, {});
  return values(publicChannels)
};


export const selectPrivateChannels = state => {

};
