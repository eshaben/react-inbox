import React from 'react';
import Message from './message'

class Messages extends React.Component{
  render(){
    let messages = this.props.messages
    return(
      <div className="">
    {messages.map ( message => <Message key={ message.id }
                                    message= {message}
                                    toggle={this.props.toggle}
                                    check={this.props.check}/>)}
      </div>
    )
  }
}

export default Messages;
