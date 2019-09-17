import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
// import connectComponent from "../../connect";
// import { loginAction } from '../../actions/User'
import "./index.scss";

class Login extends Component {
  state = {
    email: "",
    password: "",
    EmailErrors: "",
    PasswordErrors: ""
  };
  validateForm() {
    let isValid = true;
    if (!this.state.email) {
      this.setState({
        EmailErrors: "Email cannot be empty"
      });
      isValid = false;
    } else {
      this.setState({
        EmailErrors: ""
      });
    }
    if (!this.state.password) {
      this.setState({
        PasswordErrors: "Password cannot be empty"
      });
      isValid = false;
    } else {
      this.setState({
        PasswordErrors: ""
      });
    }
    return isValid;
  }

  onSubmit = e => {
    console.log(e, "error");
    e.preventDefault();
    if (this.validateForm()) {
      //this is just to show the flow
      const { email, password, EmailErrors, PasswordErrors } = this.state;
      const params = {
        email,
        password,
        PasswordErrors,
        EmailErrors
      };
      //   loginAction(params);
    }
  };

  handleInputFields(key, value) {
    if (!value) {
      this.setState({
        [key]: value
      });
    } else {
      this.setState({
        [key]: value
      });
    }
  }

  render() {
    const { EmailErrors, PasswordErrors } = this.state;
    // data from reducer
    // const { error = "", loading, redirect } = this.props.login;
    // if (loading) {
    //   return <Loader />;
    // }
    // if (redirect) {
    //   return <Redirect to="/" />;
    // }
    return (
      <div>
        <div className="content">
          <div className="right-content">
            <div className="form">
              <div className="form-content">
                <div className="form-heading">Please login to your account</div>
                <form onSubmit={this.onSubmit} className="login-form">
                  {EmailErrors && <div className="alert">{EmailErrors}</div>}
                  <input
                    placeholder="Email"
                    type="text"
                    className="form-input"
                    name="email"
                    value={this.state.email}
                    onChange={e =>
                      this.handleInputFields("email", e.target.value)
                    }
                  />
                  {PasswordErrors && (
                    <div className="alert">{PasswordErrors}</div>
                  )}
                  <input
                    placeholder="Password"
                    type="password"
                    className="form-input"
                    name="password"
                    value={this.state.password}
                    onChange={e =>
                      this.handleInputFields("password", e.target.value)
                    }
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Login;
