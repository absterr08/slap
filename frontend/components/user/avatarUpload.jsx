import React from 'react';

export default class avatarUpload extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      imgFile: '',
      imgUrl: ''
    }
    this.updateFile = this.updateFile.bind(this);
  }

  updateFile(e) {
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onLoaded = () => {
      this.setState({
        imgFile: file,
        imgUrl: fileReader.result
      })
    }
    if (file) {
      fileReader.readAsDataURL(file);
    }
  }


  render() {
    return (
      <div>
        <input type="file" onChange={this.updateFile}/>
        <img src={this.state.imgUrl}/>
      </div>
    )
  }
}
