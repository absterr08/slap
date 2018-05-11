import { values } from 'lodash'

export const selectOtherUsers = state => {
  let otherUsers;
  if (state.session && state.session.currentUser) {
    const allUsers = state.entities.users;
    const currUserId = state.session.currentUser.user.id;
    otherUsers = values(allUsers).reduce( (acc, user) => {
      if (user.id != currUserId) {
        acc[user.id] = user;
      }
      return acc;
    }, {});
  }
  return values(otherUsers);
};

export const selectSearchedUsers = state => {
  return state.ui.searchedUsers.map(id => state.entities.users[id])
}

export const selectChannelUsernames = state => {
  const selectedNames = []
  return values(selectedNames);
}

export const selectDmUsernames = (state, currentChannel)  => {
  if (!values(state.entities.users)[0]) return [];
  currentChannel = currentChannel || state.entities.channels[state.ui.currentChannel];
  const usernames = values(currentChannel.users).map( userId => state.entities.users[userId].username);
  const selectedNames = []
  const names = usernames.forEach(name => {
    if (name != state.session.currentUser.user.username) selectedNames.push(name)
  })
  return selectedNames.join(", ")
}
