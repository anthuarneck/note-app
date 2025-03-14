import { useState } from "react";
import Markdown from "react-markdown";
import "./App.css";
import Note from "./Components/Note";
import Notes from "./Components/Notes";

function App() {
  return (
    <div class="columns-2">
      <div class="aspect-3/2">
        <Notes />
      </div>
      <div class="aspect-3/2">
        <h1>Current Note</h1>
        <Note />
      </div>
    </div>
  );
}

export default App;
