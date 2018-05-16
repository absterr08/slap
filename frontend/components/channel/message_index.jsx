import React from 'react';
import Message from './message';

class MessageIndex extends React.Component {

  scrollToBottom() {
    this.el.scrollIntoView({ behavior: 'smooth' });
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }
  componentDidMount() {
    this.scrollToBottom();
  }

  render() {
    const messageItems = this.props.messageIds.map((messageId) => {
      return <Message key={ messageId } messageId={ messageId }/>;
    });
    const scrollHelper = <div ref={el => { this.el = el; }} />;


    return (
      <div id="messages-container" className="messages-list-container">
        <ul className="messages-list">
          { messageItems }
          { scrollHelper }
        </ul>
      </div>
    );
  }
}

export default MessageIndex;
