import React from 'react';
import { values, merge } from 'lodash';

import UserIndexItem from './user_index_item';
import UserList from './DM_user_list';
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
    this.closeModal = this.closeModal.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.toggleUser= this.toggleUser.bind(this);
  }

  componentDidMount () {
    this.props.fetchUsers().then( users => this.setState({ searchedUsers: this.props.allOtherUsers, }));
  }

  toggleUser(user) {
    return () => {
      const newState = merge({}, this.state.selectedUsers);
      newState[user.id] ? delete newState[user.id] : newState[user.id] = user;
      this.setState({ selectedUsers: newState });
    };
  }

  closeModal() {
    this.setState({name: "", description: ""});
    this.setState({selectedUsers: {}, search: ""});
    this.props.toggleModal();
  }

  handleInput(e) {
    // debugger
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
    this.setState({ search: e.target.value },
      () => this.timeout = setTimeout(() => {
        this.props.searchUsers(this.state.search).then(
        () => this.setState({ searchedUsers: this.props.searchedUsers }));
      }, 500)
    );
  }

  handleKeyPress(e) {
    if (e.keyCode === 13) {
      e.preventDefault();
      this.handleSubmit(e);
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    if (values(this.state.selectedUsers)[0]) {
      // debugger
      const dm = {
        is_dm: true, // todo: backend should handle this
        users: Object.keys(this.state.selectedUsers),
        current_user: this.props.currentUser
      };
      dm.users.push(this.props.currentUser.id);
      const addMessage = this.props.addMessage.bind(this);
      this.props.createDm(dm).then( (action) => {
        createChannelSubscription(action.dm.id, addMessage);
        this.props.history.push(`/messages/${action.dm.id}`);
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
              placeholder="Search users"
              onChange={this.handleInput}
              onKeyDown={this.handleKeyPress}></input>

            <div className= "dm-form-inputs">

              <UserList
                type={'selected-users'}
                users={values(this.state.selectedUsers)}
                component={SelectedUserIndexItem}
                toggleUser={this.toggleUser}
                />
              <input
                className={`channel-form-submit ${values(this.state.selectedUsers)[0] ? "active" : ""}`}
                id="channel-submit"
                type="submit"
                value="Go"
                />
            </div>

            <UserList
              type={'user-search'}
              users={this.state.searchedUsers}
              component={UserIndexItem}
              toggleUser={this.toggleUser}
              />

          </form>
        </div>
      );
    }
  }
