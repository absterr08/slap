import { fetchUsersThenMessages, fetchUser } from '../../actions/user_actions';
import { fetchChannel} from '../../actions/channel_actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { values } from 'lodash';
import { selectCurrentChannelMessages, checkIfDm } from '../../selectors/selectors';
import Channel from './channel';


const mapStateToProps = (state, ownProps) => {
  const channel = state.entities.channels[state.ui.currentChannel];
  const loading = !Boolean(channel);
  return {
    loading,
    channel,
    messages: values(selectCurrentChannelMessages(state)),
    user: state.session.currentUser.user,
    isDm: checkIfDm(state)
  };
};


export default withRouter(connect(mapStateToProps, null)(Channel));
