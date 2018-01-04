import React, { Component, PropTypes } from 'react';

class Channel extends React.Component {


    handleSubmit(e) {
      e.preventDefault();
    };

    handleKeyUp(e) {
      if(e.keyCode == 13){
        if (typeof App !== 'undefined'){
          App.room.speak(e.target.value);
        }else{
          addMessage({id: this.props.messages.length + 1, content: e.target.value})
        }
        e.target.value = "";
      };
    };

  render() {
    return (
      <div>
        <ul>
          {this.props.messages.map((msg) => {
              return <li key={`chat.msg.${msg.id}`}>{msg.content}</li>;
            })
          }
        </ul>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input type="text" onKeyUp={this.handleKeyUp}/>
        </form>
      </div>
    );
  }
}

// Channel.propTypes = {
//   messages: PropTypes.any
// };

export default Channel;
