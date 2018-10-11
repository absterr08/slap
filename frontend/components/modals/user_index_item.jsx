import React from 'react';

const UserIndexItem = ({ user, toggleUser }) => {
  return (
    <li className="user-list-item" onClick={ toggleUser }>
      <div className="user-img"></div>
      <p className="username">{user.username}</p>
    </li>
  )
}

export default UserIndexItem;
