import { fetchMessages, receiveMessage } from '../../actions/message_actions';
import { fetchChannels, fetchChannel, switchChannel } from '../../actions/channel_actions';
import { fetchUsers, fetchChannelsAndDms } from '../../actions/user_actions';
import { connect } from 'react-redux';
import { values } from 'lodash';
import Home from './home';

const mapStateToProps = (state, ownProps) => (
  {
    channelId: ownProps.match.params.channelId,
    channels: values(state.entities.channels),
    dms: values(state.entities.dms),
    renderChannelForm: state.ui.modals.newChannel,
    renderDMForm: state.ui.modals.newDM
  }
);
const mapDispatchToProps = (dispatch) => (
  {
    switchChannel: id => dispatch(switchChannel(id)),
    fetchChannel: id => dispatch(fetchChannel(id)),
    fetchChannelsAndDms: () => dispatch(fetchChannelsAndDms()),
    fetchMessages: () => dispatch(fetchMessages()),
    fetchUsers: () => dispatch(fetchUsers()),
    addMessage: message => dispatch(receiveMessage(message))
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
