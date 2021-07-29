import React from "react";
import { useState } from "react";

export default function Chat() {
  const [word, setWord] = useState("");

  return (
    <div>
      <p> { word } </p>
      <input
        type="text"
        value={word}
        onChange={(e) => setWord(e.target.value)}
      />
    </div>
  );
}
