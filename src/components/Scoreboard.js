import React from "react";
import Player from "./Player";

export default function Scoreboard() {
  return (
    <div className="Scoreboard">
      <p>Player's score:</p>
      <ul>
        <Player name="Violeta" />
        <Player name="Eszter" />
        <Player name="Jeroen" />
        <Player name="Lisa" />
      </ul>
    </div>
  );
}
