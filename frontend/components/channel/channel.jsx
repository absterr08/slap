import React from 'react';
import MessageForm from './message_form';
import MessageIndex from './message_index';

class Channel extends React.Component {

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
        <div id="???" className="messages-container">
          <MessageIndex messages={ this.props.messages } />
          <MessageForm user={ this.props.user } channelId={ this.props.channel.id } placeHolder={ `message ${title}` } isDm={this.props.isDm} />
        </div>
      </div>
    );
  }
}

export default Channel;

//document.getElementById().scrollTop = 100000
// call on willReceieve & didUpdate
