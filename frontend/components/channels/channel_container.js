import { fetchMessages, addLastMessage, receiveMessage } from '../../actions/message_actions'
import { connect } from 'react-redux';
import { values } from 'lodash';
import Channel from './channel';

const mapStateToProps = (state) => (
  {
    messages: values(state.entities.messages),
    user: state.session.currentUser
  }
);

const mapDispatchToProps = (dispatch) => (
  {
    fetchMessages: () => dispatch(fetchMessages())
  }
);


export default connect(mapStateToProps, mapDispatchToProps)(Channel);