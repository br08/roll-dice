import './Die.css';
import React, { Component } from 'react';

class Die extends Component {
  render() {
    return <i className={`die fas fa-dice-${this.props.face} ${this.props.rolling && 'rolling'}`}/>;
  }
}

export default Die;