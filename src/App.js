import React, { Component } from 'react';
import './App.css';

import ActionTime from "./ActionTime";
import Board from "./Board";
import RollDice from "./RollDice";

class App extends Component {
  constructor() {
    super();

    this.state = {
      position: 1,
      diceRoll: 0,
      action: ''
    };
    this.rollDice = this.rollDice.bind(this);
    this.setAction = this.setAction.bind(this);
  }

  rollDice() {
    let dice = Math.floor(Math.random() * 6 + 1);
    let position = (this.state.position + dice) === 20 ? 20 : (this.state.position + dice) % 20;
    this.setState({
      diceRoll: dice,
      position: position
    });
    setTimeout(this.actionTime, 50);
  }

  setAction(action) {
    this.setState({
      action
    })
  }

  render() {
    return (
      <div className="App">
        <ActionTime setAction={ this.setAction } position={ this.state.position } />
        <RollDice rollDice={ this.rollDice } />
        <Board position={ this.state.position } diceRoll={ this.state.diceRoll } action={ this.state.action } />
      </div>
    );
  }
}

export default App;