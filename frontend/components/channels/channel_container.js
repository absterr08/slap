import { fetchMessages, addLastMessage } from '../../actions/message_actions'
import { connect } from 'react-redux';
import { values } from 'lodash';
import Channel from './channel';

const mapStateToProps = (state) => (
  {
    messages: values(state.entities.messages),
    user: state.session.currentUser
  }
)

const mapDispatchToProps = (dispatch) => (
  {
    fetchMessages: () => dispatch(fetchMessages()),
    fetchMessage: id => dispatch(fetchMessages(id)),
    addLastMessage: () => dispatch(addLastMessage())
  }
)


export default connect(mapStateToProps, mapDispatchToProps)(Channel);
