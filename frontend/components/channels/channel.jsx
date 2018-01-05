import React, { Component, PropTypes } from 'react';
import Message from './message'

class Channel extends React.Component {

    constructor(props) {
      super(props);
      this.handleSubmit = this.handleSubmit.bind(this)
      this.handleKeyUp = this.handleKeyUp.bind(this)
    }

    componentDidMount() {
      this.props.fetchMessages()
    }

    handleSubmit(e) {
      e.preventDefault();
      if (typeof App !== 'undefined'){
        const message = { body: e.target.value, author_id: this.props.user.id };
        App.room.speak(message);
        this.props.addLastMessage();
      }else{
        debugger
        this.props.addMessage({id: createdMessage.id, body: e.target.value})
      }
      e.target.value = "";
    };

    handleKeyUp(e) {
      if(e.keyCode == 13){
        this.handleSubmit(e)
      }
    };

  render() {
    return (
      <div className="channel-container">
        <ul className="messages-container">
          {this.props.messages.map((message) => {
              return <Message key={message.id} message={message} user={this.props.user} />;
            })
          }
        </ul>
        <form className="message-form" onSubmit={this.handleSubmit}>
          <input className="message-form-input" type="text" onKeyUp={this.handleKeyUp}/>
        </form>
      </div>
    );
  }
}

export default Channel;
