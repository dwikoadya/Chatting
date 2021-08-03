import React, { Component } from "react";
// import NameText from "../input/NameText.js";
// import ChatText from "../input/ChatText.js";
// import SendButton from "../button/SendButton.jsx";
import "../../css/style.css";
import "../../css/timeline.css";

export default class ChatForm extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "", message: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit(event) {
    const id = Date.now();
    this.props.addChat({
      id,
      name: this.state.name,
      message: this.state.message,
      sent: true,
    });
    this.setState({ name: "" });
    this.setState({ message: "" });
    event.preventDefault();
  }

  render() {
    return (
      <form className="footer" onSubmit={this.handleSubmit}>
        <li className="list-group-item borderless d-flex align-items-center li">
          <div className="speech-bubble col-3">
            <div className="form-label-group mb-0">
              <input
                type="text"
                name="name"
                className="form-control border-2 py-4 bg-light"
                placeholder="Your Name"
                required={true}
                onChange={this.handleChange}
                value={this.state.name}
              />
            </div>
          </div>
          <div className="speech-bubble col-8">
            <div className="input-group">
              <input
                name="message"
                type="text"
                placeholder="Write Your Chat Here..."
                aria-describedby="button-addon2"
                required={true}
                className="form-control border-2 py-4 bg-light"
                onChange={this.handleChange}
                value={this.state.message}
              />
            </div>
          </div>
          <div className="speech-bubble">
            <div className="input-group">
              <button className="msg_send_btn" type="submit">
                <i className="fa fa-paper-plane" aria-hidden="true"></i>{" "}
              </button>
            </div>
          </div>
        </li>
      </form>
    );
  }
}
