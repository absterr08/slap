import React from 'react';

const SelectedUserIndexItem = ({ user, removeUser }) => {
  return (
    <li className="selected-user-list-item" onClick={ removeUser }>
      <div className="user-img"></div>
      <p className="username">{user.username}</p>
      <div className="user-remove">x</div>
    </li>
  )
}

export default SelectedUserIndexItem;
