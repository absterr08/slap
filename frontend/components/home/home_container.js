import { receiveMessage } from '../../actions/message_actions';
import { fetchUsers, fetchChannelsAndDms } from '../../actions/user_actions';
import { connect } from 'react-redux';
import { values } from 'lodash';
import Home from './home';

const mapStateToProps = (state, ownProps) => (
  {
    loading: values(state.entities.channels)[0] === undefined,
    channels: values(state.entities.channels),
    dms: values(state.entities.dms),
    renderChannelForm: state.ui.modals.newChannel,
    renderDMForm: state.ui.modals.newDM,
    renderChannelSearch: state.ui.modals.channelSearch,
    currentChannel: state.ui.currentChannel.id
  }
);

const mapDispatchToProps = (dispatch) => (
  {
    fetchChannelsAndDms: () => dispatch(fetchChannelsAndDms()),
    fetchUsers: () => dispatch(fetchUsers()),
    addMessage: message => dispatch(receiveMessage(message))
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
