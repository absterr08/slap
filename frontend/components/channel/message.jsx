import React from 'react';
import { connect } from 'react-redux';
import { formatDateTime } from '../../util/message_api_util';


const Message = ({ message, username, avatarUrl }) => {
  if (!message) { return <div></div> }
  return (
    <li className="message-container">
      <img src={`${avatarUrl}`} className="user-img-actual"/>
      <div className="message-content">
        <div className="message-header">
          <div className="username">{username}</div>
          <div className="message-timestamp">{formatDateTime(message.created_at)}</div>
        </div>
        <div className="message-body">{message.body}</div>
      </div>
    </li>
  )
}

const mapStateToProps = (state, ownProps) => {
  const message = state.entities.messages[ownProps.messageId];
  if (!message) return {};
  const author = state.entities.users[message.author_id];
  const username = author.username;
  const avatarUrl = author.avatar_url;
  return {
    message,
    username,
    avatarUrl
  }
}


export default connect(mapStateToProps, null)(Message);
