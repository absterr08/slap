import { fetchUsersThenMessages, fetchUser } from '../../actions/user_actions';
import { fetchChannel} from '../../actions/channel_actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { values } from 'lodash';
import { selectCurrentChannelMessages } from '../../selectors/messages_selector';
import Channel from './channel';


const mapStateToProps = (state) => {
  return {
    channelName: state.ui.currentChannel.name,
    messages: values(selectCurrentChannelMessages(state)),
    user: state.session.currentUser
  }
};

const mapDispatchToProps = (dispatch) => (
  {
    fetchChannel: id => dispatch(fetchChannel(id))
  }
);


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Channel));
