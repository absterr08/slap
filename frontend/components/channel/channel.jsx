import React from 'react';
import Message from './message';
import ChannelHeader from './channel_details/channel_header';
import ChannelDetail from './channel_details/channel_detail';

class Channel extends React.Component {

    constructor(props) {
      super(props);
      this.handleKeyUp = this.handleKeyUp.bind(this);
    }

  componentDidMount() {
    console.log('channelDidMount')
    this.props.changeChannel(this.props.match.params.channelId)
    const messagesDiv = document.querySelector('.messages-list-container');
  }

  componentWillReceiveProps(nextProps) {
    console.log('channelWIllReceieve');
    // if (!nextProps.match.params.channelId) {
    //   console.log('??????')
    //   const channelId = parseInt(localStorage.getItem("currentChannel"));
    //   this.props.history.push(`/messages/${channelId}`);
    // } else
    if (this.props.match.params.channelId !== nextProps.match.params.channelId) {
      this.props.changeChannel(nextProps.match.params.channelId);
    }
  }

  handleSubmit(e) {
    e.preventDefault();
  }

    handleKeyUp(e) {
      if(e.keyCode == 13){
        if (typeof App !== 'undefined'){
          const message = { body: e.target.value, author_id: this.props.user.id, channel_id: this.props.channel.id };
          App[`room${this.props.channel.id}`].speak(message);
          } //else{
        //   debugger
        //   this.props.addMessage({id: createdMessage.id, body: e.target.value});
        // }
        e.target.value = "";
      }
    }

  render() {
    console.log('rendering channel')
    let icon, description;
    if (this.props.channel.is_dm) {
      icon = <div></div>
    } else {
      icon = <div className="channel-header-icon"></div>
      description = this.props.channel.description;
    }
    const messages = this.props.messages.map((message) => {
      return <Message key={message.id} message={message}/>;
    });
    const channelDetail = <ChannelDetail channelName={ `#${this.props.title}` } />
    return (
      <div className="channel-container">
        <ChannelHeader icon={ icon } description={ description } title={ this.props.title } />
        <div className="messages-container">
          <div className="messages-list-container">
            <ul className="messages-list">
              {messages}
            </ul>
          </div>
          <form className="message-form" onSubmit={this.handleSubmit}>
            <input placeholder={`message ${this.props.title}`} className="message-form-input" type="text"
              onKeyUp={this.handleKeyUp}/>
          </form>
        </div>
        { channelDetail }
      </div>
    );
  }
}

export default Channel;

//document.getElementById().scrollTop = 100000
// call on willReceieve & didUpdate
