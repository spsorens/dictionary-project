import React from "react";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        Hello! Welcome to my dictionary app!
      </header>
      <main>
        <Dictionary />
      </main>
    </div>
  );
}
