import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import DMForm from './DM_form';
import { selectOtherUsers, selectSearchedUsers } from '../../selectors/user_selectors';
import { receiveNewChannelModal } from '../../actions/modal_actions';
import { createChannel } from '../../actions/channel_actions';
import { fetchUsers, searchUsers } from '../../actions/user_actions';
import { receiveMessage } from '../../actions/message_actions';
import { createChannelSubscription } from '../../util/channel_api_util';
import UserIndexItem from './user_index_item';
import SelectedUserIndexItem from './selected_user_index_item';

const mapStateToProps = (state) => {
  const selector = selectOtherUsers;
  const allOtherUsers = selectOtherUsers(state);
  const searchedUsers = selectSearchedUsers(state);
  debugger
  return {
    render: state.ui.modals.newDM,
    channelId: state.ui.currentChannel.id,
    allOtherUsers,
    searchedUsers,
    currentUser: state.session.currentUser
  }
};

const mapDispatchToProps = (dispatch) => (
  {
    toggleModal: () => dispatch(receiveNewChannelModal("dm")),
    createChannel: channel => dispatch(createChannel(channel)),
    fetchUsers: () => dispatch(fetchUsers()),
    addMessage: message => dispatch(receiveMessage(message)),
    searchUsers: query => dispatch(searchUsers(query))
  }
);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DMForm));
