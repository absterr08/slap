import { fetchMessages } from '../../actions/message_actions'
import { connect } from 'react-redux';
import { values } from 'lodash';
import Channel from './channel';
const mapStateToProps = (state) => (
  {
    notmessages: values(state.entities.messages)
  }
)


export default connect(mapStateToProps, null)(Channel);
