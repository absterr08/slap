import { values } from 'lodash';

export const selectCurrentChannelMessages = state => {
  // debugger
  const allMessages = state.entities.messages;
  const channelMessageIds = values(state.ui.currentChannel.messages);
  const filteredMessages = Object.assign({}, allMessages);
  channelMessageIds.map( id => delete filteredMessages[id]);
  return filteredMessages;
};

export const selectOtherUsers = state => {
  const allUsers = state.entities.users;
  const currUserId = state.session.currentUser.user.id;
  const otherUsers = values(allUsers).reduce( (acc, user) => {
    console.log(user);
    if (user.user.id != currUserId) {
      console.log(user.user.id);
      acc[user.user.id] = user.user;
    }
    return acc;
  }, {});
  return values(otherUsers);
};

export const selectDMs = state => {
  values(state.entities.channels).reduce((acc, channel) => {
    if (channel.is_dm) {
      acc[channel.id] = channel;
    }
    return acc;
  }, {});
};

export const selectPrivateChannels = state => {

};
