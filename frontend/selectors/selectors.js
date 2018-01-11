import { values } from 'lodash';

export const selectCurrentChannelMessages = state => {
  const allMessages = state.entities.messages;
  let channelMessageIds = values(state.ui.currentChannel.messages);
  const filteredMessages = Object.assign({}, allMessages);
  Object.keys(filteredMessages).map( id =>  {
    let intId = parseInt(id)
    if (!channelMessageIds.includes(intId)) {
      delete filteredMessages[intId];
    }
  });
  return filteredMessages;
};

export const selectOtherUsers = state => {
  if (state.session.currentUser) {
    const allUsers = state.entities.users;
    const currUserId = state.session.currentUser.user.id;
    const otherUsers = values(allUsers).reduce( (acc, user) => {
      if (user.user.id != currUserId) {
        acc[user.user.id] = user.user;
      }
      return acc;
    }, {});
    return values(otherUsers);
  }
};

export const selectDms = state => {
  return values(state.entities.channels).reduce((acc, channel) => {
    // debugger
    if (channel.channel.is_dm) {
      acc[channel.channel.id] = channel;
    }
    return acc;
  }, {});
};

export const selectPublicChannels = state => {
  return values(state.entities.channels).reduce((acc, channel) => {
    if (!channel.channel.is_dm) {
      // debugger
      acc[channel.channel.id] = channel;
    }
    return acc;
  }, {});
};


export const selectPrivateChannels = state => {

};
