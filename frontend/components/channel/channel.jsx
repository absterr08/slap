import React from 'react';
import Message from './message'

import { getChannelByName } from '../../util/channel_api_util';
import { selectDmNames } from '../../util/channel_api_util';

class Channel extends React.Component {

    constructor(props) {
      super(props);
      this.handleKeyUp = this.handleKeyUp.bind(this);
    }

  componentDidMount() {
    console.log('channel compDidMount');
    this.props.fetchChannel(this.props.match.params.channelId)
    // debugger
    const messagesDiv = document.querySelector('.messages-list-container');
    // console.log(messagesDiv)
    // console.log(`${messagesDiv.scrollHeight}!!!!!!`)
    // $(messagesDiv).scrollTop = messagesDiv.scrollHeight;
    // console.log(messagesDiv.scrollTop);

  }

  componentWillReceiveProps(nextProps) {
    console.log('channel compWIllReceieveProps');
    if (!nextProps.match.params.channelId) {
      console.log('??????');
      const channelId = parseInt(localStorage.getItem("currentChannel"));
      this.props.history.push(`/messages/${channelId}`);
    } else if (this.props.match.params.channelId !== nextProps.match.params.channelId) {
      // debugger
      console.log('case: next channel is different; fetching channel');
      this.props.fetchChannel(nextProps.match.params.channelId);
    }
  }

  handleSubmit(e) {
    e.preventDefault();
  }

    handleKeyUp(e) {
      if(e.keyCode == 13){
        if (typeof App !== 'undefined'){
          const message = {
            body: e.target.value,
            author_id: this.props.user.id,
            channel_id: this.props.stateChannelId
          };
          App[`room${this.props.channelId}`].speak(message);
          } //else{
        //   debugger
        //   this.props.addMessage({id: createdMessage.id, body: e.target.value});
        // }
        e.target.value = "";
      }
    }

  render() {
    console.log('channel render');
    let title, iconType, description;
    if (this.props.isDm) {
      title = selectDmNames(this.props.channel, this.props.user.username).join(', ');
      iconType = "dm-header-icon";

    } else {
      title = `${this.props.channelName}`;
      iconType = "channel-header-icon";
      description = this.props.channelDescription;
      // debugger
    }

    const messages = this.props.messages.map((message) => {
      return <Message key={message.id} message={message}/>;
    });
    return (
      <div className="channel-container">
        <div className="channel-header">
          <div className="channel-header-content">
            <div className={iconType}></div>
            <div>{title}</div>
          </div>
          <div className="channel-header-description">
            {description}
          </div>
        </div>
        <div id="???" className="messages-container">
          <div id="!!!" className="messages-list-container">
            <ul className="messages-list">
              {messages}
            </ul>
          </div>
          <form className="message-form" onSubmit={this.handleSubmit}>
            <input placeholder={`message ${title}`} className="message-form-input" type="text"
              onKeyUp={this.handleKeyUp}/>
          </form>
      </div>
      </div>
    );
  }
}

export default Channel;

//document.getElementById().scrollTop = 100000
// call on willReceieve & didUpdate
