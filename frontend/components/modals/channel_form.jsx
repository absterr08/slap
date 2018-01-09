import { connect } from 'react-redux';
import React from 'react';
import { receiveMessage } from '../../actions/message_actions';

import { receiveNewChannelModal } from '../../actions/modal_actions';
import { createChannel } from '../../actions/channel_actions';

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

    toggleActive() {
      if (this.state.name !== "") {
        $(document.getElementById("channel-submit")).addClass("active");
      }
      if (this.state.name === "") {
        $(document.getElementById("channel-submit")).removeClass("active");
      }
    }

  handleSubmit(e) {
    if (this.state.name!== "") {
      this.props.createChannel(this.state).then( () => this.createChannelSubscription() );
      this.closeModal();
    }
  }


  createChannelSubscription() {
    const addMessage = this.props.addMessage.bind(this);
    if (typeof App !== 'undefined'){
        App[`room${this.props.channelId}`] = App.cable.subscriptions.create({channel: "RoomChannel", room: this.props.channelId}, {
          connected: function() {},
          disconnected: function() {},
          received: function(data) {
            const messageChannelId = JSON.parse(data.message).channel_id;
            const channelId = JSON.parse(this.identifier).room;
            if (messageChannelId === channelId) {
              addMessage(JSON.parse(data['message']));
            }
          },
          speak: function(message) {
            return this.perform('speak', {
              message: message
            });
          }
        });
      }
  }


  render() {
    if (this.props.render) {
      return (
        <div className="new-channel-container">
          <div className="toggle-close-container" onClick={this.closeModal}>
            <div className="toggle-close">x</div>
          </div>
          <form className="channel-form-container" onSubmit={this.handleSubmit}>
            <h1 className="channel-form-header">Create a channel</h1>
            <p className="channel-form-info">{`Channels are where your members communicate. They're best organized around a topic - #leads, for example.`}</p>
            <p className="channel-form-label">Name</p>
            <input className="channel-form-input" onChange={this.handleInput("name")} onKeyUp={this.toggleActive}></input>

            <p className="channel-form-label">Purpose</p>
            <input className="channel-form-input"></input>

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
    else {
      return <div></div>;
    }
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

export default connect(mapStateToProps, mapDispatchToProps)(ChannelForm);
