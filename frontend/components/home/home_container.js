import { fetchMessages, receiveMessage } from '../../actions/message_actions';
import { fetchChannels } from '../../actions/channel_actions';
import { connect } from 'react-redux';
import { values } from 'lodash';
import Home from './home';
const mapStateToProps = (state) => (
  {
    channels: values(state.entities.channels),
    messages: values(state.entities.messages)
  }
);
const mapDispatchToProps = (dispatch) => (
  {
    fetchChannels: () => dispatch(fetchChannels()),
    fetchMessages: () => dispatch(fetchMessages()),
    addMessage: message => dispatch(receiveMessage(message))
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
