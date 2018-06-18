import React from 'react';
import { values, merge } from 'lodash';

import UserIndexItem from './user_index_item';
import SelectedUserIndexItem from './selected_user_index_item';
import { createChannelSubscription } from '../../util/channel_api_util';

export default class DMForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      searchedUsers: this.props.allOtherUsers,
      selectedUsers: {},
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
    this.props.fetchUsers().then( users => this.setState({ searchedUsers: this.props.allOtherUsers, }));
  }

  addUser(user) {
    return () => {
      const newState = merge({}, this.state.selectedUsers);
      newState[user.id] = user;
      this.setState({ selectedUsers: newState });
    };
  }

  removeUser(user) {
    return () => {
      const newState = merge({}, this.state.selectedUsers);
      delete newState[user.id];
      this.setState({ selectedUsers: newState });
    };
  }

  closeModal() {
    this.setState({name: "", description: ""});
    this.setState({selectedUsers: {}, search: ""});
    this.props.toggleModal();
  }

  handleInput(e) {
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
    this.setState({search: e.target.value},
      () => this.timeout = setTimeout(() => {
        this.props.searchUsers(this.state.search).then(
        () => this.setState({searchedUsers: this.props.searchedUsers}));
      }, 500)
    );
  }

  handleKeyPress(e) {
    if (e.keyCode === 13) {
      e.preventDefault();
      this.handleSubmit(e);
    }
  }

  toggleActive() {
    if (values(this.state.selectedUsers)[0]) {
      //dont use dom manip in react. instead, dynamically set class in render
      $(document.getElementById("channel-submit")).addClass("active");
    }
    if (!values(this.state.selectedUsers)[0]) {
      $(document.getElementById("channel-submit")).removeClass("active");
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    if (values(this.state.selectedUsers)[0]) {

      const dm = {is_dm: true,
        users: Object.keys(this.state.selectedUsers),
        current_user: this.props.currentUser
      };
      dm.users.push(this.props.currentUser.id);
      const addMessage = this.props.addMessage.bind(this);
      this.props.createDm(dm).then( (action) => {
        createChannelSubscription(action.dm.id, addMessage);
        this.props.history.push(`/dms/${action.dm.id}`);
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
            <input className="channel-form-input"
              placeHolder="Search users"
              onChange={this.handleInput}
              onKeyDown={this.handleKeyPress}></input>
            <div className= "dm-form-inputs">
              <div className="selected-users-container">
                <ul className="selected-users-list">
                  { values(this.state.selectedUsers).map((user) => {
                    return <SelectedUserIndexItem
                      key={user.id}
                      user={user}
                      removeUser={this.removeUser(user, this.toggleActive)}
                      toggleActive={this.toggleActive}/>;
                  })
                }
              </ul>
            </div>
              <input className="channel-form-submit active" id="channel-submit" type="submit" value="Go"></input>
            </div>
            <div className="user-search-container">
              <ul className="user-search-list">
                { this.state.searchedUsers.map((user) => {
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
