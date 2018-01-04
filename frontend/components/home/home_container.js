import { fetchMessages } from '../../actions/message_actions'
import { connect } from 'react-redux';
import Home from './home';
const mapStateToProps = (state) => (
  {
    messages: state.messages
  }
)
const mapDispatchToProps = (dispatch) => (
  {
    fetchMessages: () => dispatch(fetchMessages())
  }
)

export default connect(mapStateToProps, mapDispatchToProps)(Home);
