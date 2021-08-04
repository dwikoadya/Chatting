import React, { Component } from "react";
import { Link } from 'react-router-dom'
import Card from "../Card";

export default class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      showPassword: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.setPassword = this.setPassword.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.loginUser({
      email: this.state.email,
      password: this.state.password,
    });
    this.setState({ email: "" });
    this.setState({ password: "" });
  }

  setPassword() {
    this.setState({ showPassword: !this.state.showPassword });
  }

  render() {
    return (
      <div className="container vh-100">
        <div className="row vh-100">
          <div className="col self-align-center">
            <Card title="Login">
              <form onSubmit={this.handleSubmit}>
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
                </div>
                <button className="btn btn-primary" type="submit">
                  Login
                </button>
                <div>
                  <p>
                    Tidak punya akun?
                    <Link to={"/register"}> Klik Disini!</Link>
                  </p>
                </div>
              </form>
            </Card>
          </div>
        </div>
      </div>
    );
  }
}
