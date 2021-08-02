import React from "react";
import '../css/style.css'

export default function ChatText() {
  return (
    <div className="speech-bubble col-8">
      <div className="input-group">
        <input
          name="chat"
          type="text"
          placeholder="Write Your Chat Here..."
          aria-describedby="button-addon2"
          required={true}
          className="form-control border-2 py-4 bg-light"
        />
      </div>
    </div>
  );
}
