import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>EcoArts Foundation</h2>
        </div>
        <p className="App-intro">
          Welcome to the Eco Arts Foundation. More coming soon.
        </p>
      </div>
    );
  }
}

export default App;
