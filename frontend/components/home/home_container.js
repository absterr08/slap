import { receiveMessage, fetchMessages } from '../../actions/message_actions';
import { fetchUsers, fetchChannelsAndDms } from '../../actions/user_actions';
import { selectCurrentChannel } from '../../selectors/selectors';
import { connect } from 'react-redux';
import { values } from 'lodash';
import Home from './home';

const mapStateToProps = (state, ownProps) => {
  const currentChannel = selectCurrentChannel(state, ownProps.match.params.id);
  if (!currentChannel) return { loading: true };
  return {
    loading: values(state.entities.channels)[0] === undefined,
    channels: values(state.entities.channels),
    dms: values(state.entities.dms),
    renderChannelForm: state.ui.modals.newChannel,
    renderDMForm: state.ui.modals.newDM,
    renderChannelSearch: state.ui.modals.channelSearch,
    currentChannel
  }
};

const mapDispatchToProps = (dispatch) => (
  {
    fetchChannelsAndDms: () => dispatch(fetchChannelsAndDms()),
    fetchUsers: () => dispatch(fetchUsers()),
    addMessage: message => dispatch(receiveMessage(message)),
    fetchMessages: (type, id) => dispatch(fetchMessages(type, id)),
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
