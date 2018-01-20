import { values } from 'lodash'

export const selectOtherUsers = state => {
  let otherUsers;
  if (state.session && state.session.currentUser) {
    const allUsers = state.entities.users;
    const currUserId = state.session.currentUser.id;
    otherUsers = values(allUsers).reduce( (acc, user) => {
      if (user.id != currUserId) {
        acc[user.id] = user;
      }
      return acc;
    }, {});
  }
  return values(otherUsers);
};

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
    if (name != state.session.currentUser.username) selectedNames.push(name)
  })
  return selectedNames.join(", ")
}
