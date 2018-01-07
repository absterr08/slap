import React from 'react';
import Message from './message'

class Channel extends React.Component {

    constructor(props) {
      super(props);
      this.handleKeyUp = this.handleKeyUp.bind(this);
    }

    componentDidMount() {
      this.props.fetchUsersThenMessages();
    }


    handleKeyUp(e) {
      if(e.keyCode == 13){
        if (typeof App !== 'undefined'){
          const message = { body: e.target.value, author_id: this.props.user.id };
          App.room.speak(message);
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
        <ul className="messages-container">
          {messages}
        </ul>
        <form className="message-form">
          <input className="message-form-input" type="text" onKeyUp={this.handleKeyUp}/>
        </form>
      </div>
    );
  }
}

export default Channel;
