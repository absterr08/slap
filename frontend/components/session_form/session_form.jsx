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
    this.props.history.push("/");
  }

  handleChange(field) {
    return (e) => {
      this.setState( { [field]: e.currentTarget.value } );
    };
  }

  render () {
    const headerWords = this.props.formType === "signup" ? "Sign Up" : "Log In";
    let emailForm;
    if (this.props.formType === "signup") {
      emailForm = <label>Email
                    <input type="text"
                    value={ this.state.email }
                    onChange={this.handleChange("email")}
                    />
                </label>
    }
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          { headerWords }
          <br/>
          <label>Username
            <input type="text"
              value={ this.state.username }
              onChange={this.handleChange("username")}
              />
          </label>
          {emailForm}
         <label>Password
            <input type="text"
              value={ this.state.password }
              onChange={this.handleChange("password")}
              />
        </label>
    	<input type="submit" value="Submit"/>

        </form>
      </div>
    );

  }

}

export default SessionForm;
