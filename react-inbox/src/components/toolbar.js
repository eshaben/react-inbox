import React from 'react';

const Toolbar = (props) => {
  const some = 'fa fa-minus-square-o'
  const all = 'fa fa-check-square-o'
  const none = 'fa fa-square-o'

  let checkAllClass=''
  let readAllClass=''

  let checked = 0
  props.messages.forEach(message => {
    if(message.selected){
      checked++
    }
  })
  console.log(checked);
  if (checked === props.messages.length){
    checkAllClass = all
  } else if (checked === 0){
    checkAllClass = none
  } else {
    checkAllClass = some
  }

  let counter = 0
  let unreadMessages = ''
  props.messages.forEach(message => {
    if(!message.read){
      counter++
    }
  })
  if(counter === 1){
    unreadMessages = 'unread message'
  } else {
    unreadMessages = 'unread messages'
  }

  return (
  <div className="row toolbar">
    <div className="col-md-12">
      <p className="pull-right">
        <span className="badge badge">{counter}</span>
        {unreadMessages}
      </p>

      <button className="btn btn-default" onClick={props.checkAll}>
        <i className={checkAllClass}></i>
      </button>

      <button className="btn btn-default" onClick={props.read}>
        Mark As Read
      </button>

      <button className="btn btn-default" onClick={props.unread}>
        Mark As Unread
      </button>

      <select className="form-control label-select">
        <option>Apply label</option>
        <option value="dev">dev</option>
        <option value="personal">personal</option>
        <option value="gschool">gschool</option>
      </select>

      <select className="form-control label-select">
        <option>Remove label</option>
        <option value="dev">dev</option>
        <option value="personal">personal</option>
        <option value="gschool">gschool</option>
      </select>

      <button className="btn btn-default" onClick={props.deleteMessage}>
        <i className="fa fa-trash-o"></i>
      </button>
    </div>
  </div>
)
}
export default Toolbar
