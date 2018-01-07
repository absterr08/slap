import { fetchUsersThenMessages, fetchUser } from '../../actions/user_actions';
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
    fetchUsersThenMessages: () => dispatch(fetchUsersThenMessages()),
    fetchUser: id => dispatch(fetchUser(id))
  }
);


export default connect(mapStateToProps, mapDispatchToProps)(Channel);
