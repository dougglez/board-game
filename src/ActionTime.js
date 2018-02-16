import React, { Component } from "react";

export default class ActionTime extends Component {
  constructor() {
    super();

    this.state = {
      RealBad: ["Stock market crashes. Sell all your investments for 5% of purchase cost",
        "Got mugged. Roll the dice, if 1-2, lose 10% of your wealth. If 3-4, lose 5% of your wealth. If 5, give 3% to the player with the most money",
        "You died"],
      Bad: ["bad 1", "bad 2", "bad 3", "bad 4", "bad 5", "bad 6", "bad 7"],
      RealGood: ["Take $500 from each player", "Got Married. Double your next 2 paydays", "Won a lawsuit. Collect $4000"],
      Good: ["good 1", "good 2", "good 3", "good 4"],
      Investment: ["Buy a Banana Stand", "Line your banana stand with $100k", "There's always money in the banana stand"],
      PayDay: ["Collect $5", "Sell your mother's heart. Collect $12", "Jump off a balcony. Collect $1000"]
    };
    this.actionTime = this.actionTime.bind(this);
  }

  actionTime() {
    let action = '', rando = 0;
    console.log(this.props.position);
    switch(this.props.position) {
      case 13:
      case 8:
        rando = Math.floor(Math.random() * (this.state.RealBad.length - 1));
        action = this.state.RealBad[rando];
        break;
      case 18:
      case 4:
        rando = Math.floor(Math.random() * (this.state.RealGood.length - 1));
        action = this.state.RealGood[rando];
        break;
      case 1:
      case 9:
        rando = Math.floor(Math.random() * (this.state.PayDay.length - 1));
        action = this.state.PayDay[rando];
        break;
      case 2:
      case 17:
      case 12:
        rando = Math.floor(Math.random() * (this.state.Investment.length - 1));
        action = this.state.Investment[rando];
        break;
      case 3:
      case 6:
      case 7:
      case 15:
      case 20:
        rando = Math.floor(Math.random() * (this.state.Bad.length - 1));
        action = this.state.Bad[rando];
        break;
      case 5:
      case 11:
      case 14:
      case 16:
      case 19:
        rando = Math.floor(Math.random() * (this.state.Good.length - 1));
        action = this.state.Good[rando];
        break;
      default:
        rando = Math.floor(Math.random() * (this.state.Good.length - 1));
        action = this.state.Good[rando];
    }
    return action;
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(prevProps.position , this.props.position);
    if (prevProps.position !== this.props.position) {
      let action = this.actionTime();
      this.props.setAction(action);
    }
  }

  render() {
    return (
      null
    );
  }

}
