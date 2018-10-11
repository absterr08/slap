import React from 'react';
import MessageForm from './message_form';
import MessageIndex from './message_index';

class Channel extends React.Component {

  componentDidUpdate(prevProps) {

    if (this.props.match.params.channelId !== prevProps.match.params.channelId) {
      if (this.props.match.path === "/messages/:channelId") {
        const nextChannel = this.props.match.params.channelId;
        debugger
        this.props.fetchMessages(this.props.channel.channelType, nextChannel);
      }
    }
  }

  componentDidMount() {
    debugger
    this.props.fetchMessages(this.props.channel.channelType, this.props.channel.id);
  }

  messageForm(channel, title) {
    if (this.props.isMember) {
      return <MessageForm user={this.props.user} channelId={channel.id} placeHolder={`message ${title}`} channelType={channel.channelType} />
    } else {
      return (
        <div>
          <p>You are viewing #{channel.name}</p>
          <p>Created by {channel.creator} on {channel.createdOn}</p>
          <button onClick={this.props.joinChannel(channel.id, this.props.user.id)}>Join Channel</button>
        </div>
      )
    }
  }

  render() {
    if (this.props.loading) return <h1>Loading...</h1>;
    let title, iconType, description, leave;
    if (this.props.channel.channelType === 'Dm') {
      title = this.props.otherUsernames.join(', ');
      iconType = "dm-header-icon";
    } else {
      title = `${this.props.channel.name}`;
      iconType = "channel-header-icon";
      description = this.props.channel.description;
    }

    if (this.props.isMember) {
      leave = <button
        onClick={this.props.leaveChannel(this.props.channel.id, this.props.user.id)}>
        Leave channel
      </button>
    }

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
          {leave}
        </div>
        <div className="messages-container">
          <MessageIndex messages={this.props.messages} />
          {this.messageForm(this.props.channel, title)}
        </div>
      </div>
    );
  }
}

export default Channel;
