import React, { Component } from 'react';
import './App.css';
import messageList from './data/messages.js'

import Messages from './components/messages.js';
import Message from './components/message.js';
import Toolbar from './components/toolbar.js'


class App extends React.Component {

  state = {messages: messageList}

  toggle(id){
    const newMessages = this.state.messages.map(message => {
      if(message.id === id){
        message.starred = !message.starred
      }
      return message;
    })
    this.setState({
      ...this.state,
      messages: newMessages
    })
  }

  check(id){
    const newMessages = this.state.messages.map(message => {
      if(message.id === id){
        message.selected = !message.selected
      }
      return message;
    })
    this.setState({
      ...this.state,
      messages: newMessages
    })
  }

  checkAll(){
    let checked = true
    let totalChecked = 0
    this.state.messages.forEach(message => {
      if(message.selected){
        totalChecked++
      }
    })
    if(totalChecked === this.state.messages.length){
      checked = false
    }
    const newMessages = this.state.messages.map(message => {
      message.selected = checked
      return message;
    })
    this.setState({
      ...this.state,
      messages: newMessages
    })
  }

  read(){
    const newMessages = this.state.messages.map((message, i) => {
      if(message.selected){
        message.read = true
      }
      return message;
    })
    this.setState({
      ...this.state,
      messages: newMessages
    })
  }

  unread(){
    const newMessages = this.state.messages.map((message) => {
      if(message.selected){
        message.read = 'false'
      }
      return message;
    })
    this.setState({
      ...this.state,
      messages: newMessages
    })
  }

  deleteMessage(){
    const newMessages = []
    this.state.messages.map((message) => {
      if(!message.selected){
        newMessages.push(message)
      }
    })
    this.setState({
      ...this.state,
      messages: newMessages
    })
  }

  render() {
    return (
      <div className="container">
        <Toolbar checkAll={this.checkAll.bind(this)}
                 messages={this.state.messages}
                    read ={this.read.bind(this)}
                    unread ={this.unread.bind(this)}
                    deleteMessage = {this.deleteMessage.bind(this)}/>
       <Messages messages={this.state.messages}
                   toggle={this.toggle.bind(this)}
                    check={this.check.bind(this)}/>
      </div>
    );
  }
}

export default App;
