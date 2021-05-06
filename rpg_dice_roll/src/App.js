import React, { Component } from "react";
// import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>RPG DICE ROLLER APP</h1>
          <p>The goal of this app is to create an app that can be used to replace a typical set of RPG dice.</p>
          <p>D20</p> <br />
          <p>D12</p> <br />
          <p>D10</p> <br />
          <p>D8</p> <br />
          <p>D6</p> <br />
          <p>D4</p> <br />
        </header>
      </div>
    );
  }
}

export default App;
