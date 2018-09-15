import { connect } from 'react-redux';
import React from 'react';
import { receiveMessage } from '../../actions/message_actions';
import { withRouter } from 'react-router-dom';

import { receiveNewChannelModal } from '../../actions/modal_actions';
import { createChannel } from '../../actions/channel_actions';
import { createChannelSubscription } from '../../util/channel_api_util';
class ChannelForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      description: ""
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleActive = this.toggleActive.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  closeModal() {
    this.setState({name: "", description: ""});
    this.props.toggleModal();
  }

  handleInput(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  handleKeyPress(e) {
    if (e.keyCode === 13) {
      e.preventDefault();
      this.handleSubmit(e);
    }
  }
    toggleActive() {
      if (this.state.name !== "") {
        $(document.getElementById("channel-submit")).addClass("active");
      }
      if (this.state.name === "") {
        $(document.getElementById("channel-submit")).removeClass("active");
      }
    }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.name!== "") {
      let channelId;
      this.props.createChannel(this.state).then(
        (channelAction) => {
          channelId = channelAction.channel.id;
          this.props.history.push(`/messages/${ channelId }`);
        }
      ).then(() => {
        createChannelSubscription(channelId, this.props.addMessage.bind(this));
      });
      this.closeModal();
    }
  }

  render() {
    return (
      <div className="new-channel-container">
        <div className="toggle-close-container" onClick={this.closeModal}>
          <div className="toggle-close">x</div>
        </div>
        <form className="channel-form-container" onSubmit={this.handleSubmit}>
          <h1 className="channel-form-header">Create a channel</h1>
          <p className="channel-form-info">{`Channels are where your members communicate. They're best organized around a topic - #leads, for example.`}</p>
          <p className="channel-form-label">Name</p>
          <input className="channel-form-input" onChange={this.handleInput("name")} onKeyUp={this.toggleActive} onKeyDown={this.handleKeyPress}></input>

          <p className="channel-form-label">Purpose</p>
          <input className="channel-form-input" onChange={this.handleInput("description")}></input>

{  //        <p>Send invites to:</p>
    //        <input className="channel-form-input"></input
  }

          <div className="channel-form-buttons">
            <button className="channel-form-cancel" onClick={this.closeModal}>Cancel</button>
            <input className="channel-form-submit" id="channel-submit" type="submit" value="Create Channel"></input>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => (
  {
    render: state.ui.modals.newChannel,
    channelId: state.ui.currentChannel.id
  }
);

const mapDispatchToProps = (dispatch) => (
  {
    toggleModal: () => dispatch(receiveNewChannelModal("channel")),
    createChannel: channel => dispatch(createChannel(channel)),
    addMessage: message => dispatch(receiveMessage(message))
  }
);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ChannelForm));
