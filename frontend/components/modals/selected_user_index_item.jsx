import React from 'react';

const SelectedUserIndexItem = ({ user, toggleUser }) => {
  return (
    <li className="selected-user-list-item" onClick={ toggleUser }>
      <div className="selected-username">{user.username}</div>
      <div className="user-remove">x</div>
    </li>
  )
}

export default SelectedUserIndexItem;
