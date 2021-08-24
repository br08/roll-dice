import './RollDice.css'
import React, { Component } from 'react';
import Die from '../die/Die';

class RollDice extends Component {
  static defaultProps = {
    faces: ['one', 'two', 'three', 'four', 'five', 'six'],
    numDice: 1
  }

  constructor(props) {
    super(props);

    this.state = {
      rolling: false,
      dice: this.createDice()
    }

    this.roll = this.roll.bind(this);
  }

  createDice() {
    let dice = [];

    for (let i=0; i<this.props.numDice; i++) {
      const face = Math.floor(Math.random()*this.props.faces.length);
      dice.push(this.props.faces[face]);
    }

    return dice;
  }

  roll() {
    this.setState({
      rolling: true,
      dice: this.createDice()
    });

    setTimeout(() => {
      this.setState({rolling: false});
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
        <button className={`${this.state.rolling && 'rolling'}`} onClick={this.roll} disabled={this.state.rolling}>
          {this.state.rolling ? 'Rolling...' : 'Roll Dice!'}
        </button>
      </div>
    );
  }
}

export default RollDice;