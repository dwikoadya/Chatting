import React, { Component } from "react";
import Card from "../Card";

export default class RegisterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
      retype: "",
      showPassword: false,
      showRetype: false,
      errors: {},
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.setPassword = this.setPassword.bind(this);
    this.setRetype = this.setRetype.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.validate()) {
      console.log(this.state);

      this.props.addUser({
        username: this.state.username,
        email: this.state.email,
        password: this.state.password,
        retype: this.state.retype,
        isLoggedIn: true,
      });
      this.setState({ username: "" });
      this.setState({ email: "" });
      this.setState({ password: "" });
      this.setState({ retype: "" });

      alert("Register Success");
    }
  }

  validate() {
    let errors = {};
    let isValid = true;

    if (!this.state.username) {
      isValid = false;
      errors.username = "Please enter your username";
    }

    if (!this.state.password) {
      isValid = false;
      errors.password = "Please enter your password";
    }

    if (!this.state.retype) {
      isValid = false;
      errors.retype = "Please enter your confirm password";
    }

    if (
      typeof this.state.password !== "undefined" &&
      typeof this.state.retype !== "undefined"
    ) {
      if (this.state.password !== this.state.retype) {
        isValid = false;
        errors.password = "Password do not match";
      }
    }

    this.setState({
      errors: errors,
    });

    return isValid;
  }

  setPassword() {
    this.setState({ showPassword: !this.state.showPassword });
  }

  setRetype() {
    this.setState({ showRetype: !this.state.showRetype });
  }

  render() {
    return (
      <div className="container vh-100">
        <div className="row vh-100">
          <div className="col self-align-center">
            <Card title="Register">
              <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <label htmlFor="username"> Username </label>
                  <input
                    type="text"
                    className="form-control"
                    name="username"
                    id="username"
                    onChange={this.handleChange}
                    value={this.state.username}
                  />
                  <div className="text-danger">
                    {this.state.errors.username}
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="email"> Email </label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    id="email"
                    onChange={this.handleChange}
                    value={this.state.email}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <div className="input-group">
                    <input
                      className="form-control"
                      name="password"
                      id="password"
                      type={this.state.showPassword ? "text" : "password"}
                      onChange={this.handleChange}
                      value={this.state.password}
                    />
                    <div className="input group-append">
                      <button
                        type="button"
                        onClick={() => this.setPassword()}
                        className="btn btn-primary"
                      >
                        {this.state.showPassword ? (
                          <i className="fa fa-eye-slash"></i>
                        ) : (
                          <i className="fa fa-eye"></i>
                        )}
                      </button>
                    </div>
                  </div>
                  <div className="text-danger">
                    {this.state.errors.password}
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="retype">Confirm Password</label>
                  <div className="input-group">
                    <input
                      className="form-control"
                      name="retype"
                      id="retype"
                      type={this.state.showRetype ? "text" : "password"}
                      onChange={this.handleChange}
                      value={this.state.retype}
                    />
                    <div className="input group-append">
                      <button
                        type="button"
                        onClick={() => this.setRetype()}
                        className="btn btn-primary"
                      >
                        {this.state.showRetype ? (
                          <i className="fa fa-eye-slash"></i>
                        ) : (
                          <i className="fa fa-eye"></i>
                        )}
                      </button>
                    </div>
                  </div>
                  <div className="text-danger">{this.state.errors.retype}</div>
                </div>
                <button className="btn btn-primary" type="submit">
                  Register
                </button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    );
  }
}
