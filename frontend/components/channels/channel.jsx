import React, { Component, PropTypes } from 'react';

class Channel extends React.Component {

    constructor(props) {
      super(props);
      this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount() {
      this.props.fetchMessages()
    }

    handleSubmit(e) {
      e.preventDefault();
      if (typeof App !== 'undefined'){
        const message = { body: e.target.value, author_id: this.props.userId };
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
        <ul className="messages-index">
          {this.props.messages.map((msg) => {
              return <li className="message" key={msg.id}>{msg.body}</li>;
            })
          }
        </ul>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input type="text" onKeyUp={this.handleKeyUp.bind(this)}/>
          <input type="submit" onKeyUp={this.handleKeyUp.bind(this)}/>
        </form>
      </div>
    );
  }
}

// Channel.propTypes = {
//   messages: PropTypes.any
// };

export default Channel;
