import React from "react";

export default function Player(props) {
  const onClickIncrement = () => {
    props.incrementScore(props.id);
  };

  const reset = () => {
    props.reset(props.score);
  };

  return (
    <li className="Player">
      {props.name} SCORE: {props.score}
      <button onClick={onClickIncrement}>increment</button>
    </li>
  );
}
