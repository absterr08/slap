import React from 'react';
import { formatDateTime } from '../../util/message_api_util';


const Message = ({ message, user }) => {
  return (
    <li className="message-container">
      <div className="message-header">
        <div className="user-img"></div>
        <div className="username">{user.username}</div>
        <div className="message-timestamp">{formatDateTime(message.created_at)}</div>
      </div>
      <div className="message-body">{message.body}</div>
    </li>
  )
}


export default Message;
