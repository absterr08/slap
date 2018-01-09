import { connect } from 'react-redux';
import React from 'react';

import { receiveNewChannelModal } from '../../actions/modal_actions';
import { createChannel } from '../../actions/channel_actions';

class ChannelForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      users: [],
      search: ""
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
    this.setState({search: e.target.value});
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
    if (this.state.name!== "") {
      e.preventDefault();
      this.props.createChannel(this.state).then( () => this.createChannelSubscription() );
      this.closeModal();
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
            <h1 className="channel-form-header">Direct messages</h1>
            <input className="channel-form-input" onChange={this.handleInput("name")} onKeyDown={this.handleKeyPress}></input>

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
    toggleModal: () => dispatch(receiveNewChannelModal("dm")),
    createChannel: channel => dispatch(createChannel(channel))
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(ChannelForm);
