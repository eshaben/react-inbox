import React from 'react';

const Message =  ({ message }) => {
  let readClass = 'row message';
  if (message.read) {
    readClass += ' read';
  } else {
    readClass += ' unread';
  }

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
            <input type="checkbox" checked={checked} onClick={toggle}/>
          </div>
          <div className="col-xs-2">
            <i className={starred}></i>
          </div>
        </div>
      </div>
      <div className="col-xs-11">
        <span className="label label-warning">{dev}</span>
        <span className="label label-warning">{gschool}</span>
        <span className="label label-warning">{personal}</span>
        <a href="#">
         {message.subject}
        </a>
      </div>
    </div>
    )
}

function toggle(e){
  e.preventDefault()

}

export default Message
