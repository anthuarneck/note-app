import { useState } from "react";
import Markdown from "react-markdown";
import "./App.css";
import Note from "./Components/Note";
import Notes from "./Components/Notes";
import Header from "./Components/Header";

function App() {
  return (
    <div>
      <Header />
    <div class="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
      <div class="h-32 rounded-lg ">
        <Notes />
      </div>
      <div class="h-32 rounded-lg  lg:col-span-2">
        <h1>Current Note</h1>
        <Note />
      </div>
    </div>
    </div>
  );
}

export default App;
