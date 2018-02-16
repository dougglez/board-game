import React, { Component } from 'react';
import './App.css';

import Board from "./Board";
import RollDice from "./RollDice";

class App extends Component {
  constructor() {
    super();

    this.state = {
      position: 1,
      diceRoll: 0,
      action: '',
      RealBad: ["Stock market crashes. Sell all your investments for 5% of purchase cost",
        "Got mugged. Roll the dice, if 1-2, lose 10% of your wealth. If 3-4, lose 5% of your wealth. If 5, give 3% to the player with the most money",
      "You died"],
      Bad: ["bad 1", "bad 2", "bad 3", "bad 4", "bad 5", "bad 6", "bad 7"],
      RealGood: ["Take $500 from each player", "Got Married. Double your next 2 paydays", "Won a lawsuit. Collect $4000"],
      Good: ["good 1", "good 2", "good 3", "good 4"],
      Investment: ["Buy a Banana Stand", "Line your banana stand with $100k", "There's always money in the banana stand"],
      PayDay: ["Collect $5", "Sell your mother's heart. Collect $12", "Jump off a balcony. Collect $1000"]
    };
    this.rollDice = this.rollDice.bind(this);
    this.actionTime = this.actionTime.bind(this);
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

  actionTime() {
    let action = '';
    console.log(this.state.position);
    switch(this.state.position) {
      case 13:
      case 8:
        console.log('real bad bud');
        action = this.state.RealBad[Math.floor(Math.random() * this.state.RealBad.length - 1)];
        break;
      case 18:
      case 4:
        console.log('real good bud');
        action = this.state.RealGood[Math.floor(Math.random() * this.state.RealGood.length - 1)];
        break;
      case 1:
      case 9:
        console.log('real PayDay bud');
        action = this.state.PayDay[Math.floor(Math.random() * this.state.PayDay.length - 1)];
        break;
      case 2:
      case 17:
      case 12:
        console.log('such investment bud');
        action = this.state.Investment[Math.floor(Math.random() * this.state.Investment.length - 1)];
        break;
      case 3:
      case 6:
      case 7:
      case 15:
      case 20:
        console.log('that\'s bad bud');
        action = this.state.Bad[Math.floor(Math.random() * this.state.Bad.length - 1)];
        break;
      case 5:
      case 11:
      case 14:
      case 16:
      case 19:
        console.log('good work bud');
        action = this.state.Good[Math.floor(Math.random() * this.state.Good.length - 1)];
        break;
      default:
        action = this.state.Good[Math.floor(Math.random() * this.state.Good.length - 1)];
    }
    this.setState({
      action
    })
  }

  render() {
    return (
      <div className="App">
        <RollDice rollDice={ this.rollDice }/>
        <Board position={ this.state.position } diceRoll={ this.state.diceRoll } action={ this.state.action }/>
      </div>
    );
  }
}

export default App;