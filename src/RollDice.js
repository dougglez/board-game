import React from "react";

export default function RollDice(props) {

  return (
    <div>
      <button className="button btn-rolldice" onClick={props.rollDice}>Roll The Dice</button>
    </div>
  )
}