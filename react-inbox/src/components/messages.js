import React from 'react';
import Message from './message'

class Messages extends React.Component{
  render(){
    let messages = this.props.messages
    console.log(messages);
    return(
      <div className="">
    {messages.map ( message => <Message key={ message.id } message= {message} />)}
      </div>
    )
  }
}

export default Messages;
