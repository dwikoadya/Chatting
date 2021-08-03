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
      showRetype: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.setPassword = this.setPassword.bind(this)
    this.setRetype = this.setRetype.bind(this)
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit(event) {
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
    event.preventDefault();
  }

  setPassword() {
    this.setState({showPassword: !this.state.showPassword})
  }

  setRetype() {
    this.setState({showRetype: !this.state.showRetype})
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
                </div>
                <div className="form-group">
                  <label htmlFor="email"> Email </label>
                  <input
                    type="text"
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
