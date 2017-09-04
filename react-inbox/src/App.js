import React, { Component } from 'react';
import './App.css';

import Messages from './components/messages.js';
import Message from './components/message.js';
import Toolbar from './components/toolbar.js'


class App extends React.Component {

  state = {
    messages: [],
  }

  async componentDidMount(){
    const response = await fetch('http://localhost:8082/api/messages')
    const json = await response.json()
    this.setState({
      messages: json._embedded.messages
    })
  }

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
    const newMessages = this.state.messages.map((message) => {
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
        message.read = false
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

  addLabel(e){
    console.log(e.target.value);
    const newMessages = this.state.messages.map((message) => {
      if(message.selected){
        message.labels.push(e.target.value)
      }
      return message;
    })
    this.setState({
      ...this.state,
      messages: newMessages
    })
  }

  removeLabel(e){
    console.log(e.target.value);
    let labels = []
    const newMessages = this.state.messages.map((message) => {
      if(message.selected){
        for(var i=0; i<message.labels.length; i++){
          if(message.labels[i] !== e.target.value){
          labels.push(message.labels[i])
          }
        }
        message.labels = labels
      }
      return message;
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
           deleteMessage = {this.deleteMessage.bind(this)}
                addLabel = {this.addLabel.bind(this)}
              removeLabel= {this.removeLabel.bind(this)}/>
       <Messages messages={this.state.messages}
                   toggle={this.toggle.bind(this)}
                    check={this.check.bind(this)}/>
      </div>
    );
  }
}

export default App;
