import './App.css';
import React, { Component } from 'react';
import RollDice from "./components/roll-dice/RollDice";

class App extends Component {
  render() {
    return (
      <div className="app">
        <RollDice numDice={2}/>
      </div>
    );
  }
}

export default App;
