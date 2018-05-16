import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { values } from 'lodash';
import { selectCurrentChannelMessages, selectOtherUsernames, checkIfDm } from '../../selectors/selectors';
import Channel from './channel';

const mapStateToProps = (state, ownProps) => {
  const channel = state.entities.channels[state.ui.currentChannel];
  const loading = !Boolean(channel) || !Boolean(values(state.entities)[0]);
  return {
    loading,
    channel,
    user: state.session.currentUser,
    isDm: checkIfDm(state),
    otherUsernames: selectOtherUsernames(state, channel)
  };
};

export default withRouter(connect(mapStateToProps, null)(Channel));
