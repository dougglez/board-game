import React, { Component } from "react";
import Rackets from './small-rocket-ship-silhouette.png';
import Deck1 from "./Deck1";
import Deck2 from "./Deck2";


export default class Board extends Component {

  render() {
    let squares = Array(20).fill('').map((v,i) => {
      return (
        <div className={`square ${'square' + (i+1)}`} key={i}>
          {i+1}
          {
            i+1 === this.props.position ?
            <img src={Rackets} className="rackets"/>
              : null
          }
        </div>
      )
    });
    return (
      <div className="board-container">
        {squares}
        <div className="big-middle-square">
          <Deck1 />
          <div className="dice_roll">
            Dice Rolled: {this.props.diceRoll}
          </div>
          <div className="action_time">
            Action: {this.props.action}
          </div>
          <Deck2 />
        </div>
      </div>
    )
  }
}