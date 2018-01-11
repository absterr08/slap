import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { values } from 'lodash';
import merge from 'lodash/merge';

import { selectOtherUsers } from '../../selectors/selectors';
import { receiveNewChannelModal } from '../../actions/modal_actions';
import { createChannel } from '../../actions/channel_actions';
import { fetchUsers } from '../../actions/user_actions';
import { receiveMessage } from '../../actions/message_actions';
import { createChannelSubscription } from '../../util/channel_api_util';
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
    this.setState({users: {}, search: ""});
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
    if (values(this.state.users)[0]) {
      //dont use dom manip in react. instead, dynamically set class in render
      $(document.getElementById("channel-submit")).addClass("active");
    }
    if (!values(this.state.users)[0]) {
      $(document.getElementById("channel-submit")).removeClass("active");
    }
  }

  handleSubmit(e) {
    if (values(this.state.users)[0]) {

      const dm = {is_dm: true,
        users: Object.keys(this.state.users),
        current_user: this.props.currentUser
      };
      dm.users.push(this.props.currentUser.user.id)
      e.preventDefault();
      const addMessage = this.props.addMessage.bind(this);
      this.props.createChannel(dm).then( (dm) => {
        createChannelSubscription(dm.payload.channel.id, addMessage);
        this.props.history.push(`/messages/${dm.payload.channel.id}`);
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
            <h1 className="channel-form-header">Direct messages</h1>
            <div className="dm-form-inputs">
              <input className="channel-form-input" onChange={this.handleInput} onKeyDown={this.handleKeyPress}></input>
              <input className="channel-form-submit active" id="channel-submit" type="submit" value="Go"></input>
            </div>
  {  //        <p>Send invites to:</p>
      //        <input className="channel-form-input"></input
    }
            <ul className="selected-users-list">
              { values(this.state.users).map((user) => {
                return <SelectedUserIndexItem
                  key={user.id}
                  user={user}
                  removeUser={this.removeUser(user, this.toggleActive)}
                  toggleActive={this.toggleActive}/>;
                })
              }
            </ul>
            <div className="user-search-container">
              <ul className="user-search-list">
                { this.props.users.map((user) => {
                  return <UserIndexItem
                    key={user.id}
                    user={user}
                    addUser={this.addUser(user, this.toggleActive)}
                    toggleActive={this.toggleActive}/>;
                }) }
              </ul>
            </div>
          </form>
        </div>
      );
    }
  }


const mapStateToProps = (state) => {
  // debugger
  const selector = selectOtherUsers;
  return {
    render: state.ui.modals.newDM,
    channelId: state.ui.currentChannel.id,
    users: selectOtherUsers(state),
    currentUser: state.session.currentUser
  }
};

const mapDispatchToProps = (dispatch) => (
  {
    toggleModal: () => dispatch(receiveNewChannelModal("dm")),
    createChannel: channel => dispatch(createChannel(channel)),
    fetchUsers: () => dispatch(fetchUsers()),
    addMessage: message => dispatch(receiveMessage(message))
  }
);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DMForm));
