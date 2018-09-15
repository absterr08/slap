import React from 'react';
import MessageForm from './message_form';
import MessageIndex from './message_index';

class Channel extends React.Component {

  componentWillReceiveProps(nextProps) {
    // handle messed up url
    if (!nextProps.match.params.channelId) {
      // const channelId = parseInt(localStorage.getItem("currentChannel"));
      // this.props.history.push(`/channels/${defaultChannel}`);
    } else if (this.props.match.params.channelId !== nextProps.match.params.channelId) {
      const nextChannel = parseInt(nextProps.match.params.channelId);
      if (nextProps.match.path === "/channels/:channelId") {
        this.props.fetchChannelMessages(nextChannel).then(() => {
          this.props.switchChannel(nextChannel);
        });
      } else if (nextProps.match.path === "/dms/:channelId") {
        this.props.fetchDmMessages(nextChannel).then(() => {
          this.props.switchDm(nextChannel);
        });
      }
    }
  }

  render() {
    if (this.props.loading) return <h1>Loading...</h1>;
    console.log('channel render');
    let title, iconType, description;
    if (this.props.isDm) {
      title = this.props.otherUsernames.join(', ');
      iconType = "dm-header-icon";
    } else {
      title = `${this.props.channel.name}`;
      iconType = "channel-header-icon";
      description = this.props.channel.description;
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
        </div>
        <div className="messages-container">
          <MessageIndex messages={ this.props.messages } />
          <MessageForm user={ this.props.user } channelId={ this.props.channel.id } placeHolder={ `message ${title}` } isDm={this.props.isDm} />
        </div>
      </div>
    );
  }
}

export default Channel;
