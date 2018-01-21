import React from 'react';
import { connect } from 'react-redux';
import { formatDateTime } from '../../util/message_api_util';


const Message = ({ message, currentUser }) => {
  return (
    <li className="message-container">
      <div className={`user-img-${message.author.img_url}`}></div>
      <div className="message-content">
        <div className="message-header">
          <div className="username">{message.author.username}</div>
          <div className="message-timestamp">{formatDateTime(message.created_at)}</div>
        </div>
        <div className="message-body">{message.body}</div>
      </div>
    </li>
  )
}

const mapStateToProps = (state, ownProps) => {
  // 
  return {
    currentUser: state.session.currentUser.user
  }
}


export default connect(mapStateToProps, null)(Message);
