import React from "react";

export default function SubmitButton(props) {
  const { label } = props;
  return (
    <button className="btn btn-primary" type="submit">
      {label}
    </button>
  );
}
