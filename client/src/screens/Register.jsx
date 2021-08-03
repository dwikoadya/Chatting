import React from "react";
import RegisterForm from "../component/form/RegisterForm";
import axios from "axios";
import { Component } from "react";

const request = axios.create({
  baseURL: "http://localhost:3001/api/users/",
  timeout: 1000,
  headers: { "X-Custom-Header": "foobar" },
})

export default class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    };

    this.addUser = this.addUser.bind(this);
  }

  addUser(userData) {
    this.setState((state) => ({
      data: [...state.data, userData],
    }));
    request
    .post(`register`, userData)
    .then(response => {
      console.log(response.data)
      console.log('User Berhasil Ditambahkan')
    })
    .catch(err => {
      console.log('rusak' ,err)
    })
  }

  render() {
    return (
      <RegisterForm addUser={this.addUser} />
    )
  }
}
