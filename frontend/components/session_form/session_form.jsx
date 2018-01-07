import React from 'react';

class SessionForm extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm(this.state);
  }

  handleChange(field) {
    return (e) => {
      this.setState({ [field]: e.currentTarget.value });
    };
  }

  render () {
    const signUpWords = [
          <h1 key={1}>Sign Up</h1>,
          <p key={2}>Enter your <strong>email address</strong>, <strong>username</strong>, and <strong>password</strong>.</p>
          ];
    const signInWords = [
          <h1 key={1}>Sign in to Slap</h1>,
          <p key={2}>Enter your <strong>username</strong> and <strong>password</strong>.</p>
          ];
    let emailForm;
    if (this.props.formType === "signup") {
      emailForm = <input type="text"
                    
                    value={ this.state.email }
                    onChange={ this.handleChange("email") }
                  />;
    }
    const errors = this.props.errors[0] ? <div className="session-errors-container">
      <div className="session-errors">{this.props.errors}</div>
    </div> : "";

    return (
      <div className="session-form-container">
        {errors}
        <form className="session-form" onSubmit={ this.handleSubmit }>
          { this.props.formType === "signup" ? signUpWords : signInWords }

          <input type="text"
            value={ this.state.username }
            placeholder="username"
            onChange={ this.handleChange("username") }
          />

          {emailForm}

          <input type="password"
            value={ this.state.password }
            placeholder="password"
            onChange={this.handleChange("password")}
          />

        <input type="submit" className="button" value="Continue"/>
        </form>
      </div>
    );

  }

}

export default SessionForm;
