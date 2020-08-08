import React, { Component } from "react";
import "./App.css";

import Smurfs from './Smurfs';
import SmurfForm from './SmurfForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>SMURFTASTIC State Management</h1>
        <SmurfForm />
        <h2>List of Smurfs</h2>
        <Smurfs />
      </div>
    );
  }
}

export default App;