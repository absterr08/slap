import { values, merge } from 'lodash';

export const selectOtherUsers = (state) => {
  const otherUsers = merge({}, state.entities.users);
  return filterCurrentUser(state, otherUsers);
};

const selectChannelUsers = (state, channel) => {
  const allUsers = state.entities.users;
  if  (!channel || Object.keys(allUsers).length === 0)  return {};
  const channelUsers = {};
  channel.users.forEach(userId => {
      channelUsers[userId] = allUsers[userId];
    }
  );
  return channelUsers;
};

const filterCurrentUser = (state, otherUsers) => {
  const currUserId = state.session.currentUser.id;
  delete otherUsers[currUserId];
  return values(otherUsers);
};

const selectOtherChannelUsers = (state, channel) => {
  const allChannelUsers = selectChannelUsers(state, channel);
  return filterCurrentUser(state, allChannelUsers);
};

export const selectOtherUsernames = (state, channel) => {
  if (!channel) return [];
  const otherUsers = selectOtherChannelUsers(state, channel);
  return otherUsers.map(user => user.username);
};

export const selectCurrentChannel = (state) => {
  const id = state.ui.currentChannel.id;
  const type = state.ui.currentChannel.type;
  if (type === "Dm") {
    return state.entities.dms[id];
  } else if (type === "Channel") {
    return state.entities.channels[id];
  } else {
    console.log('type doesnt match Dm or Channel')
    return null;
  }
};

export const selectSearchedChannels = (state) => {
  return state.ui.searchedChannels.map((channelId) => {
    return state.entities.channels[channelId];
  });
};

export const subscribedChannels = state => {
  return state.ui.subscribedChannels.map((channelId) => {
    return state.entities.channels[channelId];
  });
};
