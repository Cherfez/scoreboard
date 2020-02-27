import React, { useState } from "react";

export default function AddPlayerForm(props) {
  const [name, set_name] = useState("");

  function addPlayer(event) {
    event.preventDefault(); //prefents reload of page
    console.log("what is my name", name);
    props.createPlayer(name);
    set_name("");
  }

  return (
    <div className="AddPlayerForm">
      <p>
        New player:{" "}
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={event => {
            console.log("new input .value:", event.target.value);
            set_name(event.target.value);
          }}
        />{" "}
        <button onClick={addPlayer}>Add</button>
      </p>
    </div>
  );
}
