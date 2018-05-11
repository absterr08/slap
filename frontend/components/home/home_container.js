import { fetchMessages, receiveMessage } from '../../actions/message_actions';
import { fetchChannels, fetchChannel, changeChannel} from '../../actions/channel_actions';
import { fetchUsers} from '../../actions/user_actions';
import { connect } from 'react-redux';
import { values } from 'lodash';
import Home from './home';
const mapStateToProps = (state) => (
  {
    channels: values(state.entities.channels),
    renderChannelForm: state.ui.modals.newChannel,
    renderDMForm: state.ui.modals.newDM
  }
);
const mapDispatchToProps = (dispatch) => (
  {
    fetchChannels: () => dispatch(fetchChannels()),
    fetchChannel: id => dispatch(fetchChannel(id)),
    changeChannel: id => dispatch(changeChannel(id)),
    fetchMessages: () => dispatch(fetchMessages()),
    fetchUsers: () => dispatch(fetchUsers()),
    addMessage: message => dispatch(receiveMessage(message))
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
