import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { values } from 'lodash';
import { selectOtherUsernames, selectCurrentChannel } from '../../selectors/selectors';
import { fetchMessages } from '../../actions/message_actions';
import { joinChannel, leaveChannel } from '../../actions/channel_actions';
import Channel from './channel';

const mapStateToProps = (state, ownProps) => {
  const channel = selectCurrentChannel(state);
  if (!channel) return { loading: true };
  const currUser = state.session.currentUser;
  const isMember = channel.users.indexOf(currUser.id) >= 0;
  return {
    isMember,
    channel,
    messages: state.entities.messages,
    user: currUser,
    otherUsernames: selectOtherUsernames(state, channel)
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchMessages: (type, id) => dispatch(fetchMessages(type, id)),
    joinChannel: (id, currUserId) => () => dispatch(joinChannel(id, currUserId)),
    leaveChannel: (id, currUserId) => () => dispatch(leaveChannel(id, currUserId))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Channel));
