import React from 'react';
import Message from './message'

import { getChannelByName } from '../../util/channel_api_util';

class Channel extends React.Component {

    constructor(props) {
      super(props);
      this.handleKeyUp = this.handleKeyUp.bind(this);
    }

    componentDidMount() {
      if (!this.props.match.params.channelId) {
        this.props.history.push(`/messages/${this.props.channelId}`);
      }
      this.props.fetchChannel(this.props.channelId);
    }

    componentWillReceiveProps(nextProps) {
      if (!nextProps.match.params.channelId) {
        this.props.history.goBack();
      } else if (this.props.channelId !== nextProps.match.params.channelId) {
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
    const messages = this.props.messages.map((message) => {
        if (!this.props.getMessageAuthor(message.author_id)) {
          this.props.fetchUser(message.author_id);
        } else {
          return <Message key={message.id} message={message} user={this.props.getMessageAuthor(message.author_id)} />;
        }
      });
    return (
      <div className="channel-container">
        <div className="channel-header"></div>
        <div className="messages-container">
          <ul className="messages-list">
            {messages}
          </ul>
          <form className="message-form">
            <input className="message-form-input" type="text" onKeyUp={this.handleKeyUp}/>
          </form>
      </div>
      </div>
    );
  }
}

export default Channel;
