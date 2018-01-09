import { connect } from 'react-redux';
import React from 'react';

import { receiveNewChannelModal } from '../../actions/modal_actions';
import { createChannel } from '../../actions/channel_actions';

class ChannelForm extends React.Component {

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      name: "",
      description: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  closeModal() {
    this.props.toggleModal();
  }

  handleInput(field) {
    return (e) => {
      this.setState({[field]: e.target.value})
      if (this.state.name !== "") {
        document.getElementById("channelSubmit").toggleClass("active");
      };
    };
  }

  handleSubmit(e) {
    if (this.state.name!== "") {
      this.props.createChannel(this.state);
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
            <h1 className="channel-form-header">Create a channel</h1>
            <p className="channel-form-info">{`Channels are where your members communicate. They're best organized around a topic - #leads, for example.`}</p>
            <p className="channel-form-label">Name</p>
            <input className="channel-form-input"></input>

            <p className="channel-form-label">Purpose</p>
            <input className="channel-form-input"></input>

  {  //        <p>Send invites to:</p>
      //        <input className="channel-form-input"></input
    }

            <div className="channel-form-buttons">
              <button className="channel-form-cancel">Cancel</button>
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
    render: state.ui.modals.newChannel
  }
);

const mapDispatchToProps = (dispatch) => (
  {
    toggleModal: () => dispatch(receiveNewChannelModal("channel")),
    createChannel: channel => dispatch(createChannel(channel))
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(ChannelForm);
