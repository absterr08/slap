import { fetchUsersThenMessages, fetchUser } from '../../actions/user_actions';
import { fetchChannel} from '../../actions/channel_actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { values } from 'lodash';
import { selectCurrentChannelMessages } from '../../selectors/selectors';
import Channel from './channel';


const mapStateToProps = (state, ownProps) => {
  debugger
  return {
    channelName: state.ui.currentChannel.name,
    channelId: ownProps.match.params.channelId,
    channelDescription: state.ui.currentChannel.description,
    channel: state.entities.channels[state.ui.currentChannel.id],
    messages: values(selectCurrentChannelMessages(state)),
    user: state.session.currentUser.user,
    isDm: state.ui.currentChannel.isDm
  }
};


export default withRouter(connect(mapStateToProps, null)(Channel));
