import { fetchMessages, receiveMessage } from '../../actions/message_actions';
import { connect } from 'react-redux';
import { values } from 'lodash';
import Home from './home';
const mapStateToProps = (state) => (
  {
    messages: values(state.entities.messages)
  }
);
const mapDispatchToProps = (dispatch) => (
  {
    fetchMessages: () => dispatch(fetchMessages()),
    addMessage: message => dispatch(receiveMessage(message))
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
