import React from 'react';
import Message from './message'

import { getChannelByName } from '../../util/channel_api_util';

class Channel extends React.Component {

    constructor(props) {
      super(props);
      this.handleKeyUp = this.handleKeyUp.bind(this);
    }

    componentWillMount() {
    }

  componentDidMount() {
    this.props.fetchChannel(this.props.match.params.channelId)
    // debugger
    const messagesDiv = document.querySelector('.messages-list-container');
    // console.log(messagesDiv)
    // console.log(`${messagesDiv.scrollHeight}!!!!!!`)
    // $(messagesDiv).scrollTop = messagesDiv.scrollHeight;
    // console.log(messagesDiv.scrollTop);

  }

  componentWillReceiveProps(nextProps) {
    console.log('compWIllReceieve');
    if (!nextProps.match.params.channelId) {
      const channelId = parseInt(localStorage.getItem("currentChannel"));
      this.props.history.push(`/messages/${channelId}`);
    } else if (this.props.match.params.channelId !== nextProps.match.params.channelId) {
      console.log('case: next channel is different; fetching channel');
      this.props.fetchChannel(nextProps.match.params.channelId);
    }
  }


    handleKeyUp(e) {
      if(e.keyCode == 13){
        if (typeof App !== 'undefined'){
          const message = { body: e.target.value, author_id: this.props.user.id };
          App[`room${this.props.channelId}`].speak(message);
          } //else{
        //   debugger
        //   this.props.addMessage({id: createdMessage.id, body: e.target.value});
        // }
        e.target.value = "";
      }
    }

  render() {
    console.log('rendering channel')
    const messages = this.props.messages.map((message) => {
      return <Message key={message.id} message={message}/>;
    });
    return (
      <div className="channel-container">
        <div className="channel-header">#{this.props.channelName}</div>
        <div className="messages-container">
          <div className="messages-list-container">
            <ul className="messages-list">
              {messages}
            </ul>
          </div>
          <form className="message-form">
            <input placeholder={`message #${this.props.channelName}`} className="message-form-input" type="text" onKeyUp={this.handleKeyUp}/>
          </form>
      </div>
      </div>
    );
  }
}

export default Channel;
