import React, { Component } from "react";
import "./Dice.css";

class Dice extends Component {
  count = {
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six"
  };
  render() {
    return (
      <i
        className={`Dice fas fa-dice-${this.count[this.props.count]} ${
          this.props.rolling ? "Dice-rolling" : ""
        }`}
      ></i>
    );
  }
}

export default Dice;
