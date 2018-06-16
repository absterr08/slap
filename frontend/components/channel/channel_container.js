import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { values } from 'lodash';
import { selectCurrentChannelMessages, selectOtherUsernames, selectCurrentChannel } from '../../selectors/selectors';
import { fetchMessages, receiveMessage, fetchDmMessages, fetchChannelMessages } from '../../actions/message_actions';
import Channel from './channel';

const mapStateToProps = (state, ownProps) => {
  // const channel = state.entities.channels[state.ui.currentChannel] || state.entities.dms[state.ui.currentChannel] || state.entities.channels[state.ui.defaultChannel] || state.entities.dms[state.ui.defaultChannel];
  const channel = selectCurrentChannel(state);
  if (!channel) return { loading: true };
  return {
    channel,
    messages: state.entities.messages,
    user: state.session.currentUser,
    isDm: channel.is_dm,
    otherUsernames: selectOtherUsernames(state, channel)
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchChannelMessages: (id) => dispatch(fetchChannelMessages(id)),
    fetchDmMessages: id => dispatch(fetchDmMessages(id))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Channel));
