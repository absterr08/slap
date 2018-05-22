import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { values } from 'lodash';
import { selectCurrentChannelMessages, selectOtherUsernames } from '../../selectors/selectors';
import Channel from './channel';

const mapStateToProps = (state, ownProps) => {
  const channel = state.entities.channels[state.ui.currentChannel] || state.entities.dms[state.ui.currentChannel] || state.entities.channels[state.ui.defaultChannel] || state.entities.dms[state.ui.defaultChannel];
  if (!channel) return { loading: true };
  return {
    channel,
    messages: selectCurrentChannelMessages(state),
    user: state.session.currentUser,
    isDm: channel.is_dm,
    otherUsernames: selectOtherUsernames(state, channel)
  };
};

export default withRouter(connect(mapStateToProps, null)(Channel));
