import React from 'react';

export default class MessageForm extends React.Component {

  handleKeyUp(e) {
    if(e.keyCode == 13){
      const message = {
        body: e.target.value,
        author_id: this.props.user.id,
        channel_id: this.props.channelId
      };
      const room = App[`room${this.props.channelId}`];
      room.speak(message);
      e.target.value = "";
    }
  }

  render() {
    return (
      <form className="message-form" onSubmit={this.handleSubmit}>
        <input placeholder={`message ${title}`} className="message-form-input" type="text"
          onKeyUp={this.handleKeyUp}/>
      </form>
    );
  }
}
