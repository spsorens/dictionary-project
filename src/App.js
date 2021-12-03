import React from "react";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">DICTIONARY</header>
      <main>
        <Dictionary defaultKeyword="music" />
      </main>
    </div>
  );
}
