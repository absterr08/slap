import React from 'react';
import Message from './message';

export default MessageIndex = () => {
  const messages = this.props.messages.map((message) => {
    return <Message key={message.id} message={message}/>;
  });

  return (
    <div id="!!!" className="messages-list-container">
      <ul className="messages-list">
        {messages}
      </ul>
    </div>
  );
};
