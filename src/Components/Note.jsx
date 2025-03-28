import React from "react";
import { useState } from "react";
import Markdown from "react-markdown";

export default function Note() {
  const [text, setText] = useState("");

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div class="p-8 ...">
      <input
        placeholder="type notes"
        type="text"
        value={text}
        onChange={handleChange}
      />
      <div class="p-8 ...">
        <Markdown>{text}</Markdown>
      </div>
    </div>
  );
}
