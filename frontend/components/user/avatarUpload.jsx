import { updateAvatar } from '../../util/user_api_util';
import React from 'react';
import { connect } from 'react-redux';

class avatarUpload extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      imgFile: '',
      imgUrl: ''
    }
    this.updateFile = this.updateFile.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateFile(e) {
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({
        imgFile: file,
        imgUrl: fileReader.result
      })
    }
    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  handleSubmit(e) {
    var formData = new FormData();
    formData.append("user[image]", this.state.imgFile);
    updateAvatar(this.props.currentUserId, formData);
  }


  render() {
    return (
      <div>
        <input type="file" onChange={this.updateFile}/>
        <img src={this.state.imgUrl}/>
        <button onClick={this.handleSubmit}>Set As Profile Image</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    currentUserId: state.session.currentUser.user.id
  }
};

export default connect(mapStateToProps, null)(avatarUpload);
