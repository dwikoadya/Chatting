import React from "react";
import "../css/style.css";
import "../css/timeline.css";

export default function ChatItem(props) {
  const timestamp = props.chat.id;
  return (
    <div className="container py-2">
      <div className="qa-message-list" id="wallmessages">
        <div className="message-item" id="m16">
          <div className="message-inner">
            <div className="message-head clearfix">
              <div className="avatar pull-left">
                <img
                  src="https://p.kindpng.com/picc/s/78-785827_user-profile-avatar-login-account-male-user-icon.png"
                  alt="avatar"
                />
              </div>
              <div className="user-detail">
                <div className="d-flex justify-content-between name d-flex handle">
                  <h5>{props.chat.name}</h5>
                  <button
                    className="btn btn-link px-0 py-0"
                    onClick={props.chat.sent ? props.remove : props.resend}
                  >
                    {props.chat.sent ? (
                      <i className="fas fa-trash-alt"></i>
                    ) : (
                      <i className="fas fa-repeat fa-lg"></i>
                    )}
                  </button>
                </div>
                <div className="post-meta">
                  <div className="asker-meta">
                    <span className="qa-message-what"></span>
                    <span className="qa-message-when">
                      <span className="qa-message-when-data">
                        {Intl.DateTimeFormat("en-US", {
                          year: "numeric",
                          month: "2-digit",
                          day: "2-digit",
                        }).format(timestamp)}
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="qa-message-content">
              {props.chat.message}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
