import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


class Splash extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: ""
    };
  }

  handleSubmit(e) {
    this.props.history.push("/signup");
  }

  handleChange(e) {
    this.setState({ email: e.target.value });
  }
  render() {
    return(
      <div className="splash-container">
        <div className="splash-image"/>
        <div className="main-info">
          <h1>Productivity starts here</h1>
          <p className="slap-description">Whip your team into shape with Slap! A messaging app for teams that
            need a litle extra push in the right direction.</p>
          <div className="signup-container">
            <input type="text" placeholder="email@example.com" value={ this.state.email }/>
            <Link to="/signup" className="signup-btn">Get started</Link>
          </div>
          <p className="signin-text">Already using Slap?&nbsp;
          <Link to="/login" className="signin-link">Sign In</Link>
          </p>
        </div>
      </div>
    );
  }
}





export default Splash;
