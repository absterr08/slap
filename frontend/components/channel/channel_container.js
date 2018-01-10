import { fetchUsersThenMessages, fetchUser } from '../../actions/user_actions';
import { fetchChannel} from '../../actions/channel_actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { values } from 'lodash';
import { selectCurrentChannelMessages } from '../../selectors/selectors';
import Channel from './channel';


const mapStateToProps = (state, ownProps) => {
  return {
    channelName: state.ui.currentChannel.name,
    channelId: ownProps.match.params.channelId,
    messages: values(selectCurrentChannelMessages(state)),
    user: state.session.currentUser.user
  }
};

const mapDispatchToProps = (dispatch) => (
  {
    fetchChannel: id => dispatch(fetchChannel(id))
  }
);


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Channel));
