import React, { Component } from 'react';
import './App.css';
import messageList from './data/messages.js'

import Messages from './components/messages.js';
import Message from './components/message.js';
import Toolbar from './components/toolbar.js'




class App extends Component {

  render() {
    return (
      <div className="container">
        <Toolbar />
        <Messages messages={messageList}/>

      </div>
    );
  }
}

export default App;
