import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Greeting from './components/messages.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Greeting />
      </div>
    );
  }
}

export default App;
