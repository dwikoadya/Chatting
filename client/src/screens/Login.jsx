import React, { Component } from "react";
import LoginForm from "../component/form/LoginForm";
import axios from "axios";

const request = axios.create({
  baseURL: "http://localhost:3001/api/users",
  timeout: 15000,
  headers: { "X-Custom-Header": "foobar" },
});

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    };

    this.loginUser = this.loginUser.bind(this);
  }

  loginUser(loginData) {
    this.setState((state) => ({
      data: [...state.data, loginData],
    }));
    request
      .post("/login", loginData)
      .then((response) => {
        console.log(response.data);
        console.log("Login Berhasil");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return <LoginForm loginUser={this.loginUser} />;
  }
}
