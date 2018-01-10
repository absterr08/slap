import React from 'react';
import { connect } from 'react-redux';
import { formatDateTime } from '../../util/message_api_util';


const Message = ({ message }) => {
  return (
    <li className="message-container">
      <div className="message-header">
        <div className="user-img"></div>
        <div className="username">{message.author.username}</div>
        <div className="message-timestamp">{formatDateTime(message.created_at)}</div>
      </div>
      <div className="message-body">{message.body}</div>
    </li>
  )
}

const mapStateToProps = (state, ownProps) => {
  // debugger
  return {

  }
}


export default connect(mapStateToProps, null)(Message);
