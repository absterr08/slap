import React from 'react';


const Message = ({ message, user }) => {
  return (
    <li className="message-container">
      <div className="user-img"></div>
      <div className="username">{user.username}</div>
      <div className="message-timestamp">{message.created_at}</div>
      <div className="message-body">{message.body}</div>
    </li>
  )
}


export default Message;
