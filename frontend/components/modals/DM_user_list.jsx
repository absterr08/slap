import React from 'react';

const UserList= ({ type, users, component: Component, toggleUser, toggleActive }) => {
  return (
  <div className={`${type}-container`}>
    <ul className={`${type}-list`}>
      {users.map( user => {
        return <Component
          key={user.id}
          user={user}
          toggleUser={toggleUser(user)}
          />;
        })}
      </ul>
    </div>
  )
}

export default UserList;
