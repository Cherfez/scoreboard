import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Scoreboard from "./components/Scoreboard";
import AddPlayerForm from "./components/AddPlayerForm";

function App() {
  return (
    <div className="App">
      <Scoreboard />
      <AddPlayerForm />
    </div>
  );
}

export default App;
