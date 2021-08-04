import React, { Component } from "react";
import ChatForm from "../component/form/ChatForm";
import ChatList from "../component/ChatList";
import "../css/style.css";
import axios from "axios";
import io from "socket.io-client";

const socket = io("http://localhost:3001");

const request = axios.create({
  baseURL: "http://localhost:3001/api/",
  timeout: 1000,
  headers: { "X-Custom-Header": "foobar" },
});

export default class ChatBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    };

    this.addChat = this.addChat.bind(this);
    this.deleteChat = this.deleteChat.bind(this);
  }

  scrollToBottom = () => {
    this.messagesEnd.scrollIntoView({ behavior: "smooth" });
  };

  componentDidMount() {
    this.loadChat();
    this.scrollToBottom();

    socket.emit("delete chat", "dikirim");

    socket.on("load chat", () => {
      this.loadChat();
    });

    socket.on("delete chat", (id) => {
      this.setState((state) => ({
        data: state.data.filter((chatData) => chatData.id !== id),
      }));
    });
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }

  loadChat = () => {
    request
      .get("chats")
      .then((response) => {
        console.log(response);
        let chatData = response.data.map((chats) => {
          return { ...chats, sent: true };
        });
        this.setState({ data: chatData });
      })
      .catch((err) => {
        alert(err);
      });
  };

  addChat(chatData) {
    this.setState((state) => ({
      data: [...state.data, chatData],
    }));
    request
      .post(`chats`, chatData)
      .then((response) => {
        console.log(response);
        console.log("Data Berhasil di tambahkan");
        socket.emit("add chat");
      })
      .catch((err) => {
        this.setState((state) => ({
          data: state.data.map((item) => {
            if (item.id === chatData.id) {
              item.sent = false;
            }
            return item;
          }),
        }));
      });
  }

  deleteChat(id) {
    this.setState((state) => ({
      data: state.data.filter((item) => item.id !== id),
    }));
    request
      .delete(`chats/${id}`)
      .then((response) => {
        console.log("Data Berhasil Dihapus");
        socket.emit("delete chat", id);
      })
      .catch((err) => {
        alert(err);
      });
  }

  resendChat = (chatData) => {
    request
      .post(`chats`, chatData)
      .then((response) => {
        this.setState((state) => ({
          data: state.data.map((item) => {
            if (item.id === chatData.id) {
              item.sent = true;
            }
            return item;
          }),
        }));
      })
      .catch((err) => {
        this.setState((state) => ({
          data: state.data.map((item) => {
            if (item.id === chatData.id) {
              item.sent = false;
            }
            return item;
          }),
        }));
      });
  };

  render() {
    return (
      <div className="py-5">
        <div className="card">
          <h2 className="card-header text-center">React Chat</h2>
        </div>
        <div className="column">
          <div className="gambar">
            <div
              className="scrollable"
              style={{ maxHeight: "67vh", overflowY: "auto" }}
            >
              <ChatList
                data={this.state.data}
                deleteChat={this.deleteChat}
                resendChat={this.resendChat}
              />
              <div
                style={{ float: "left", clear: "both" }}
                ref={(el) => {
                  this.messagesEnd = el;
                }}
              ></div>
            </div>
          </div>
        </div>
        <ChatForm addChat={this.addChat} style={{ overflowY: "auto" }} />
      </div>
    );
  }
}
