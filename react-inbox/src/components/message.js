import React from 'react';

class Message extends React.Component{
  check(){
    this.props.check(this.props.message.id)
  }

  render(){
    let message = this.props.message

    let readClass = 'row message';
    readClass += message.read ? " read":" unread"


    let starred = 'star fa';
    if (message.starred) {
      starred += ' fa-star';
    } else {
      starred += ' fa-star-o';
    }

    let selected = 'row message';
    if (message.selected) {
      readClass += ' selected';
    } else {
      readClass += ' ';
    }

    let checked = ''
    if (message.selected) {
      checked += 'checked'
    } else {
      checked += '';
    }

    let dev = ''
    let gschool = ''
    let personal = ''

    for (var i=0; i<message.labels.length; i++){
      if(message.labels[i] === 'dev'){
        dev = 'dev'
      } else if(message.labels[i] === 'gschool'){
        gschool = 'gschool'
      } else if(message.labels[i] === 'personal'){
        personal = 'personal'
      }
    }


    return (
      <div className={readClass} >
        <div className="col-xs-1">
          <div className="row">
            <div className="col-xs-2">
              <input type="checkbox" checked={checked} onClick={this.check.bind(this)}/>
            </div>
            <div className="col-xs-2">
              <i onClick={this.props.toggle.bind(null, this.props.message.id)} className={message.starred ? "star fa fa-star": "star fa fa-star-o"}></i>
            </div>
          </div>
        </div>
        <div className="col-xs-11">
          <span className="label label-warning">{dev}</span>
          <span className="label label-warning">{gschool}</span>
          <span className="label label-warning">{personal}</span>
          <a href="#">
           {this.props.message.subject}
          </a>
        </div>
      </div>
    )
  }
}

export default Message
