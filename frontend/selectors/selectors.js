import { values, merge } from 'lodash';

export const selectCurrentChannelMessages = state => {
  const allMessages = state.entities.messages;
  const currentChannelId = state.ui.currentChannel;
  const filteredMessages = [];
  values(allMessages).forEach(message => {
      if (message.channel_id === currentChannelId) {
        filteredMessages.push(message);
      }
    }
  );
  return filteredMessages;
};

const selectChannelUsers = (state, channelId) => {
  const allUsers = state.entities.users;
  const channel = state.entities.channels[channelId];
  if  (!channel)  return {};
  const channelUsers = {};
  channel.users.forEach(userId => {
      channelUsers[userId] = allUsers[userId];
    }
  );
  return channelUsers;
};

// export const selectOtherUsers = (state) => {
//   const allUsersCopy = merge({}, state.entities.users);
//   const currUserId = state.session.currentUser.id;
//   delete allUsersCopy[currUserId];
//   return values(allUsersCopy);
// };

export const selectOtherUsers = (state, channelId) => {
  let otherUsers;
  if (channelId) {
    otherUsers = selectChannelUsers(state, channelId);
    debugger
  } else {
    otherUsers = merge({}, state.entities.users);
  }
  const currUserId = state.session.currentUser.id;
  delete otherUsers[currUserId];
  return values(otherUsers);
};

export const selectOtherUsernames = (state, channel) => {
  if (!channel) return [];
  const otherUsers = selectOtherUsers(state, channel.id);
  return otherUsers.map(user => user.username);
};

export const selectDms = state => {
  return values(state.entities.channels).reduce((acc, channel) => {
    if (channel.is_dm) {
      acc[channel.id] = channel;
    }
    return acc;
  }, {});
};

export const checkIfDm = state => {
  const channel = state.entities.channels[state.ui.currentChannel];
  return channel && channel.is_dm;
};

export const selectPublicChannels = state => {
  return values(state.entities.channels).reduce((acc, channel) => {
    if (!channel.is_dm) {
      // debugger
      acc[channel.id] = channel;
    }
    return acc;
  }, {});
};

export const selectPrivateChannels = state => {

};
