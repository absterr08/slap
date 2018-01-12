import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { receiveSessionErrors } from '../../actions/session_actions';

class Splash extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: ""
    };
  }

  componentDidMount() {
    this.props.receiveSessionErrors("");
  }

  validateEmail(e) {
    if (this.state.email === "") {
      e.preventDefault();
      this.props.receiveSessionErrors("Please enter an email address.");
    } else {
      this.props.receiveSessionErrors("");
    }
  }

  handleSubmit(e) {
    this.props.history.push("/signup");
  }

  handleChange(e) {
    this.setState({ email: e.target.value });
  }
  render() {
    const errors = this.props.errors[0] ?
      <p className="splash-errors">{this.props.errors}</p> : "";

    return(
      <div className="splash-container">
        <div className="splash-image"/>
        <div className="main-info">
          <h1>Productivity starts here</h1>
          <p className="slap-description">Whip your team into shape with Slap! A handy messaging app for teams that
            need a litle extra push in the right direction.</p>
          {errors}
          <div className="signup-container">
            <input className="email-input" type="email" placeholder="Email address" value={ this.state.email } onChange={ this.handleChange.bind(this) }/>
            <Link to={`/signup/${this.state.email}`} className="signup-btn" onClick={this.validateEmail.bind(this)}>Get started</Link>
          </div>
          <p className="signin-text">Already using Slap?&nbsp;
          <Link to="/login" className="signin-link">Sign In</Link>
          </p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    errors: state.errors.session
  };
};

const mapDispatchToProps = dispatch => {
  return {
    receiveSessionErrors: errors => dispatch(receiveSessionErrors(errors))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Splash);
