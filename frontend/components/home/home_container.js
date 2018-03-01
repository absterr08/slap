import { fetchMessages, receiveMessage } from '../../actions/message_actions';
import { fetchChannels, fetchChannel } from '../../actions/channel_actions';
import { fetchUsers} from '../../actions/user_actions';
import { connect } from 'react-redux';
import { values } from 'lodash';
import Home from './home';
const mapStateToProps = (state) => (
  {
    channels: values(state.entities.channels),
    defaultChannel: Object.keys(state.entities.channels)[0],
    getChannel: id => state.entities.channels.id,
    messages: values(state.entities.messages),
    currentUser: state.session.currentUser,
    renderChannelForm: state.ui.modals.newChannel,
    renderDMForm: state.ui.modals.newDM
  }
);
const mapDispatchToProps = (dispatch) => (
  {
    fetchChannels: () => dispatch(fetchChannels()),
    fetchMessages: () => dispatch(fetchMessages()),
    fetchUsers: () => dispatch(fetchUsers()),
    addMessage: message => dispatch(receiveMessage(message))
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
