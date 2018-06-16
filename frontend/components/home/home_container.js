import { fetchChannelMessages, receiveMessage } from '../../actions/message_actions';
import { fetchChannels, fetchChannel, switchChannel, switchDm} from '../../actions/channel_actions';
import { fetchUsers, fetchChannelsAndDms } from '../../actions/user_actions';
import { connect } from 'react-redux';
import { values } from 'lodash';
import Home from './home';

const mapStateToProps = (state, ownProps) => (
  {
    loading: values(state.entities.channels)[0] === undefined,
    channelId: ownProps.match.params.channelId,
    channels: values(state.entities.channels),
    dms: values(state.entities.dms),
    renderChannelForm: state.ui.modals.newChannel,
    renderDMForm: state.ui.modals.newDM,
    currentChannel: state.ui.currentChannel.id
  }
);

const mapDispatchToProps = (dispatch) => (
  {
    switchChannel: id => dispatch(switchChannel(id)),
    switchDm: id => dispatch(switchDm(id)),
    fetchChannel: id => dispatch(fetchChannel(id)),
    fetchChannelsAndDms: () => dispatch(fetchChannelsAndDms()),
    fetchChannelMessages: id => dispatch(fetchChannelMessages(id)),
    fetchUsers: () => dispatch(fetchUsers()),
    addMessage: message => dispatch(receiveMessage(message))
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
