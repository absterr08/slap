import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { values } from 'lodash';
import { selectCurrentChannelMessages, selectOtherUsernames, selectCurrentChannel } from '../../selectors/selectors';
import { fetchMessages, receiveMessage, fetchDmMessages, fetchChannelMessages } from '../../actions/message_actions';
import { switchChannel, switchDm } from '../../actions/channel_actions';
import Channel from './channel';

const mapStateToProps = (state, ownProps) => {
  const channel = selectCurrentChannel(state);
  if (!channel) return { loading: true };
  return {
    channel,
    messages: state.entities.messages,
    user: state.session.currentUser,
    isDm: channel.is_dm,
    otherUsernames: selectOtherUsernames(state, channel),
    defaultChannel: state.ui.defaultChannel
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchChannelMessages: (id) => dispatch(fetchChannelMessages(id)),
    fetchDmMessages: id => dispatch(fetchDmMessages(id)),
    switchChannel: id => dispatch(switchChannel(id)),
    switchDm: id => dispatch(switchDm(id))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Channel));
