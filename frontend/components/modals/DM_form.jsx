import React from 'react';
import { connect } from 'react-redux';
import { values } from 'lodash';
import merge from 'lodash/merge';

import { receiveNewChannelModal } from '../../actions/modal_actions';
import { createChannel } from '../../actions/channel_actions';
import { fetchUsers } from '../../actions/user_actions';
import UserIndexItem from './user_index_item';
import SelectedUserIndexItem from './selected_user_index_item';

class DMForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      users: {},
      search: ""
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleActive = this.toggleActive.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.addUser = this.addUser.bind(this);
    this.removeUser = this.removeUser.bind(this);
  }

  componentDidMount () {
    this.props.fetchUsers();
  }

  addUser(user) {
    return () => {
      const newState = merge({}, this.state.users);
      newState[user.id] = user;
      this.setState({ users: newState });
    };
  }

  removeUser(user) {
    return () => {
      const newState = merge({}, this.state.users);
      delete newState[user.id];
      this.setState({ users: newState });
    };
  }

  closeModal() {
    this.setState({name: "", description: ""});
    this.props.toggleModal();
  }

  handleInput(e) {
    this.setState({search: e.target.value});
  }

  handleKeyPress(e) {
    if (e.keyCode === 13) {
      e.preventDefault();
      this.handleSubmit(e);
    }
  }

  toggleActive() {
    // debugger
    if (values(this.state.users)[0]) {
      $(document.getElementById("channel-submit")).addClass("active");
    }
    if (!values(this.state.users)[0]) {
      $(document.getElementById("channel-submit")).removeClass("active");
    }
  }

  handleSubmit(e) {
    if (this.state.users[0]) {
      const dm = {}
      debugger
      e.preventDefault();
      this.props.createChannel(this.state).then( () => this.createChannelSubscription() );
      this.closeModal();
    }
  }

  render() {
    // debugger
    if (this.props.render) {
      return (
        <div className="new-channel-container">
          <div className="toggle-close-container" onClick={this.closeModal}>
            <div className="toggle-close">x</div>
          </div>
          <form className="channel-form-container" onSubmit={this.handleSubmit}>
            <h1 className="channel-form-header">Direct messages</h1>
            <div className="dm-form-inputs">
              <input className="channel-form-input" onChange={this.handleInput} onKeyDown={this.handleKeyPress}></input>
              <input className="channel-form-submit" id="channel-submit" type="submit" value="Go"></input>
            </div>
  {  //        <p>Send invites to:</p>
      //        <input className="channel-form-input"></input
    }
            <ul className="selected-users-list">
              { values(this.state.users).map((user) => {
                return <SelectedUserIndexItem
                  key={user.id}
                  user={user}
                  removeUser={this.removeUser(user)}
                  toggleActive={this.toggleActive}/>;
                })
              }
            </ul>
            <div className="user-search-container">
              <ul className="user-search-list">
                { this.props.users.map((user) => {
                  return <UserIndexItem
                    key={user.user.id}
                    user={user.user}
                    addUser={this.addUser(user.user)}
                    toggleActive={this.toggleActive}/>;
                }) }
              </ul>
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
    render: state.ui.modals.newDM,
    channelId: state.ui.currentChannel.id,
    users: values(state.entities.users)
  }
);

const mapDispatchToProps = (dispatch) => (
  {
    toggleModal: () => dispatch(receiveNewChannelModal("dm")),
    createChannel: channel => dispatch(createChannel(channel)),
    fetchUsers: () => dispatch(fetchUsers())
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(DMForm);
