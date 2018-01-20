import { values } from 'lodash'

export const selectOtherUsers = state => {
  let otherUsers;
  if (state.session && state.session.currentUser) {
    const allUsers = state.entities.users;
    const currUserId = state.session.currentUser.user.id;
    otherUsers = values(allUsers).reduce( (acc, user) => {
      if (user.user.id != currUserId) {
        acc[user.user.id] = user.user;
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

export const selectDmUsernames = (state)  => {
  return selectOtherUsers(state).map( user => user.username).join(", ")
}
