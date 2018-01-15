import { values } from 'lodash'

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

export const selectChannelUsernames = state => {
  // debugger
  const selectedNames = []
  return values(selectedNames);
}

export const selectDmUsernames = (usernames, currentUsername)  => {
  const selectedNames = []
  usernames.map(name => {
    if (name != currentUsername) {
      selectedNames.push(name)
    }
  })
  return selectedNames;
}
