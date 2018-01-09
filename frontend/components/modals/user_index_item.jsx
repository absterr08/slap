import React from 'react';

const UserIndexItem = ({ user, addUser }) => {
  return (
    <li className="user-list-item" onClick={ addUser }>
      <div className="user-img"></div>
      <p className="username">{user.username}</p>
    </li>
  )
}

export default UserIndexItem;
