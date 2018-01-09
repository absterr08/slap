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
  }

  closeModal() {
    this.props.toggleModal();
  }

  handleSubmit(e) {
    this.props.createChannel(this.state);
    this.closeModal();
  }

  handleInput(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  render() {
    if (this.props.render) {
      return (
        <div className="new-channel-container">
          <div className="toggle-close" onClick={this.closeModal}>x</div>
          <form className="channel-form-container" onSubmit={this.handleSubmit}>
            <h1 className="channel-form-header">Create a channel</h1>
            <p className="channel-form-info">Channels are where your members communicate. Theyre best organized around a topic - #leads, for example.</p>
            <label className="channel-form-label">Name
              <input className="channel-form-input"></input>
            </label>
            <label className="channel-form-label">Purpse
              <input className="channel-form-input"></input>
            </label>
            <label className="channel-form-label">Send invites to:
              <input className="channel-form-input"></input>
            </label>
            <div className="channel-form-buttons">
              <button className="channel-form-cancel">Cancel</button>
              <input className="channel-form-submit" type="submit" value="Create Channel"></input>
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
    toggleModal: () => dispatch(receieveNewChannelModal("channel")),
    createChannel: channel => dispatch(createChannel(channel))
  }
);

export default connect(mapStateToProps, null)(ChannelForm);
