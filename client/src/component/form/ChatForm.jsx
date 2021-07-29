import React from "react";
import NameText from "../input/NameText.js";
import ChatText from "../input/ChatText.js";
import SendButton from "../button/SendButton.jsx";

export default function ChatForm() {
  return (
    <form className="footer">
      <li className="list-group-item borderless d-flex align-items-center li">
        <NameText />
        <ChatText />
        <SendButton />
      </li>
    </form>
  );
}
