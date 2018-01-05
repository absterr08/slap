import { fetchMessages, addLastMessage, receiveMessage } from '../../actions/message_actions'
import { fetchUsers } from '../../actions/user_actions'
import { connect } from 'react-redux';
import { values } from 'lodash';
import Channel from './channel';

const mapStateToProps = (state) => {
  return {
    messages: values(state.entities.messages),
    user: state.session.currentUser,
    getMessageAuthor: authorId => (state.entities.users[authorId])
  };
};

const mapDispatchToProps = (dispatch) => (
  {
    fetchMessages: () => dispatch(fetchMessages()),
    fetchUsers: () => dispatch(fetchUsers())
  }
);


export default connect(mapStateToProps, mapDispatchToProps)(Channel);
