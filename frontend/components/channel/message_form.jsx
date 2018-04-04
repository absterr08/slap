import React from 'react';

export default class MessageForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      body: ''
    };
    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleKeyUp(e) {
    if (e.keyCode == 13){
      const message = {
        body: this.state.body,
        author_id: this.props.user.id,
        channel_id: this.props.channelId
      };
      const room = App[`room${this.props.channelId}`];
      room.speak(message);
      this.setState({ body: '' });
    }
  }

  handleChange(e) {
    this.setState({ body: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log("submitted??");
  }

  render() {
    return (
      <form className="message-form" onSubmit={ this.handleSubmit }>
        <input
          type="text"
          className="message-form-input"
          placeholder={ this.props.placeHolder }
          value={ this.state.body }
          onChange={ this.handleChange }
          onKeyUp={ this.handleKeyUp }
        />
      </form>
    );
  }
}
