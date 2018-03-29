import { fetchUsersThenMessages, fetchUser } from '../../actions/user_actions';
import { fetchChannel} from '../../actions/channel_actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { values } from 'lodash';
import { selectCurrentChannelMessages, selectOtherUserNames, checkIfDm } from '../../selectors/selectors';
import { selectDmNames } from '../../util/channel_api_util';

import Channel from './channel';


const mapStateToProps = (state, ownProps) => {
  const channel = state.entities.channels[state.ui.currentChannel];
  const loading = !Boolean(channel) || !Boolean(values(state.entities)[0]);
  if (!loading) {
    const otherUserNames = selectOtherUserNames(state);
    debugger
  }
  return {
    loading,
    channel,
    messages: selectCurrentChannelMessages(state),
    user: state.session.currentUser.user,
    isDm: checkIfDm(state),
    otherUsernames: ''
  };
};


export default withRouter(connect(mapStateToProps, null)(Channel));
