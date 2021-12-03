import React from "react";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        What would you like to learn about?
      </header>
      <main>
        <Dictionary defaultKeyword="music" />
      </main>
    </div>
  );
}
