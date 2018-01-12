import React from 'react';

const SelectedUserIndexItem = ({ user, removeUser, toggleActive }) => {
  return (
    <li className="selected-user-list-item" onClick={ removeUser }>
      <div className="selected-username">{user.username}</div>
      <div className="user-remove">x</div>
    </li>
  )
}

export default SelectedUserIndexItem;
