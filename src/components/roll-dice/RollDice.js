import './RollDice.css'
import React, { Component } from 'react';
import Die from '../die/Die';

const random = length => {
  return Math.floor(Math.random() * length)
}

class RollDice extends Component {
  static defaultProps = {
    faces: ['one', 'two', 'three', 'four', 'five', 'six'],
    numDice: 1
  }

  constructor(props) {
    super(props);

    this.state = {
      rolling: false,
      dice: this.generateDice(Array.from({length: this.props.numDice}))
    }

    this.handleClick = this.handleClick.bind(this);
  }

  generateDice(dice) {
    return dice.map(d => this.props.faces[ random(this.props.faces.length) ]);
  }

  rollDice(state) {
    return {dice: this.generateDice(state.dice)}
  }

  startRolling() {
    return { rolling: true }
  }

  stopRolling() {
    return { rolling: false }
  }

  handleClick() {
    this.setState(this.startRolling);
    this.setState(this.rollDice);

    setTimeout(() => {
      this.setState(this.stopRolling);
    }, 1000);
  }

  render() {
    const dice = this.state.dice.map((f, i) => {
      return <Die key={i} face={f} rolling={this.state.rolling}/>
    });
    return(
      <div className="roll-dice">
        <div className="container">
          {dice}
        </div>
        <button className={`${this.state.rolling && 'rolling'}`} onClick={this.handleClick} disabled={this.state.rolling}>
          {this.state.rolling ? 'Rolling...' : 'Roll Dice!'}
        </button>
      </div>
    );
  }
}

export default RollDice;