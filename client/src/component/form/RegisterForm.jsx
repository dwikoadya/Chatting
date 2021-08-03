import React, { Component } from "react";
import Text from "../input/Text";
import Password from "../input/Password";
import Card from "../Card";

export default class RegisterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
      retype: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    console.log(event.target.value)
    this.setState({
      value: event.target.value,
    });
  }

  handleSubmit(event) {
    console.log(this.state.email)
    console.log(this.state.username)
    console.log(this.state.password)
    console.log(this.state.retype)
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

  render() {
    return (
      <div className="container vh-100">
        <div className="row vh-100">
          <div className="col self-align-center">
            <Card title="Register">
              <form onSubmit={this.handleSubmit}>
                <Text
                  label="Username"
                  id="userName"
                  name="userName"
                  onChange={this.handleChange}
                  value={this.state.username}
                />
                <Text
                  label="Email"
                  id="email"
                  name="email"
                  onChange={this.handleChange}
                  value={this.state.email}
                />
                <Password
                  label="Password"
                  id="password"
                  name="password"
                  onChange={this.handleChange}
                  value={this.state.password}
                />
                <Password
                  label="Confirm Password"
                  id="retype"
                  name="retype"
                  onChange={this.handleChange}
                  value={this.state.retype}
                />
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
