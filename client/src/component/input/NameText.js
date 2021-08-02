import React from "react";
// import '../css/style.css'

export default function NameText() {
  return (
    <div className="speec-bubble col-3">
    <div className="form-label-group mb-0">
      <input
        type="text"
        name="username"
        className="form-control border-2 py-4 bg-light"
        placeholder="Your Name"
        required={true}
      />
    </div>
  </div>
  );
}
