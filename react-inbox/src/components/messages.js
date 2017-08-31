import React from 'react';
import Message from './message'

const Messages = (props) => {
  let messages = props.messages;
  console.log(messages);
  return(
    <div className="">
  {messages.map ( message => <Message key={ message.id } message= {message} />)}
    </div>
  )
};

export default Messages;
