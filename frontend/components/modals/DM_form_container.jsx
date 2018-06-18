import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import DMForm from './DM_form';
import { selectSearchedUsers } from '../../selectors/user_selectors';
import { selectOtherUsers } from '../../selectors/selectors';
import { receiveNewChannelModal } from '../../actions/modal_actions';
import { createDm } from '../../actions/dm_actions';
import { fetchUsers, searchUsers } from '../../actions/user_actions';
import { receiveMessage } from '../../actions/message_actions';
import UserIndexItem from './user_index_item';
import SelectedUserIndexItem from './selected_user_index_item';

const mapStateToProps = (state) => {
  const selector = selectOtherUsers;
  const allOtherUsers = selectOtherUsers(state);
  const searchedUsers = selectSearchedUsers(state);
  return {
    render: state.ui.modals.newDM,
    channelId: state.ui.currentChannel.id,
    allOtherUsers,
    searchedUsers,
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = (dispatch) => (
  {
    toggleModal: () => dispatch(receiveNewChannelModal("dm")),
    createDm: dm => dispatch(createDm(dm)),
    fetchUsers: () => dispatch(fetchUsers()),
    addMessage: message => dispatch(receiveMessage(message)),
    searchUsers: query => dispatch(searchUsers(query))
  }
);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DMForm));
