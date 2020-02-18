import React, { Component } from "react";
import Dice from "./Dice";
import "./RollDice.css";

class RollDice extends Component {
  state = {
    dice1: 1,
    dice2: 1,
    rolling: false
  };
  rolldice = () => {
    this.setState({
      dice1: Math.floor(Math.random() * 6) + 1,
      dice2: Math.floor(Math.random() * 6) + 1,
      rolling: true
    });
    setTimeout(() => {
      this.setState({ rolling: false });
    }, 1000);
  };

  render() {
    return (
      <div className="RollDice">
        <div className="RollDice-icon">
          <Dice count={this.state.dice1} rolling={this.state.rolling} />
          <Dice count={this.state.dice2} rolling={this.state.rolling} />
        </div>
        <button className="RollDice-button" onClick={this.rolldice} disabled={this.state.rolling}>
          {this.state.rolling ? "Rolling!!" : "Roll Dice"}
        </button>
      </div>
    );
  }
}

export default RollDice;
