import React, { useState } from "react";
import Player from "./Player";
import AddPlayerForm from "./AddPlayerForm";

//comparing the player scores
function compare_score(player_a, player_b) {
  return player_b.score - player_a.score;
}

// comparing by name
function compare_name(a, b) {
  return a.name.localeCompare(b.name);
}

const originalPlayers = [
  { id: 1, name: "Violeta", score: 11 },
  { id: 2, name: "Eszter", score: 14 },
  { id: 3, name: "Jeroen", score: 4 },
  { id: 4, name: "Lisa", score: 42 }
];

export default function Scoreboard() {
  const [players, set_players] = useState(originalPlayers);
  const [sort_by, set_sort_by] = useState("score");

  // what to sort the players by
  let sortingFunction;
  if (sort_by === "score") {
    sortingFunction = compare_score;
  } else {
    sortingFunction = compare_name;
  }

  //we gonna map over this
  const players_sorted = [...players].sort(sortingFunction);

  //tells us what we gonna sort by. name or score (drop down/select option)
  const change_sorting = event => {
    console.log("new sort order:", event.target.value);
    set_sort_by(event.target.value);
  };

  //incrementing the scores
  const incrementScore = id => {
    console.log("WHAT IS ID", id);
    const updatePlayer = players.map(player => {
      if (player.id === id) {
        return { name: player.name, id: player.id, score: player.score + 1 };
      } else {
        return player;
      }
    });
    set_players(updatePlayer);
  };

  //rest score to 0
  const reset = () => {
    console.log("im gonna reset");
    const updatePlayer = players.map(player => {
      player.score = 0;
      return player;
    });
    set_players(updatePlayer);
  };

  //adding a new player to the list
  const createPlayer = name => {
    console.log("Let's add a new player with the name:", name);

    //to give a new ID
    const newPlayer = { name: name, score: 0, id: players.length + 1 };

    //to make new version of array with players
    const newPlayers = [...players, newPlayer];
    console.log(newPlayers);

    //set state to new array
    set_players(newPlayers);
  };

  return (
    <div className="Scoreboard">
      <h1>Scoreboard</h1>
      {players_sorted.map(player => {
        return (
          <Player
            name={player.name}
            score={player.score}
            id={player.id}
            incrementScore={incrementScore}
            reset={reset}
          />
        );
      })}
      <p>
        Sort order:{" "}
        <select onChange={change_sorting}>
          <option value="score">Sort by score</option>
          <option value="name">Sort by name</option>
        </select>
        <button onClick={reset}>Reset</button>
      </p>
      <AddPlayerForm createPlayer={createPlayer} />
    </div>
  );
}
