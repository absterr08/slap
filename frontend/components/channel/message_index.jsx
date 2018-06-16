import React from 'react';
import Message from './message';

const MessageIndex = ({messages, channelTitle}) => {
  const messageItems = Object.values(messages).map((message) => {
    return <Message key={ message.id } message={ message }/>;
  });

  return (
    <div id="!!!" className="messages-list-container">
      <ul className="messages-list">
        { messageItems }
      </ul>
    </div>
  );
};

export default MessageIndex;
