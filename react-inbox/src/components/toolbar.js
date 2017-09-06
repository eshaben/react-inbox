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
  if (checked === props.messages.length){
    checkAllClass = all
  } else if (checked === 0){
    checkAllClass = none
  } else {
    checkAllClass = some
  }

  let counter = 0
  let disabled = ''
  let unreadMessages = ''
  props.messages.forEach(message => {
    if(!message.read){
      counter++
    }
  })
  if(counter ===0){
    checkAllClass = none
  }
  if(counter === 1){
    unreadMessages = 'unread message'
  } else {
    unreadMessages = 'unread messages'
  }

  if(props.messages.length === 0){
    disabled = ' disabled'
  }

  let composeForm = 'hidden';

  return (
      <div className="row toolbar">
        <div className="col-md-12">
          <p className="pull-right">
            <span className="badge badge">{counter}</span>
            {unreadMessages}
          </p>

          <a className="btn btn-danger" onClick={props.toggleForm}>
            <i className="fa fa-plus"></i>
          </a>

          <button className="btn btn-default" onClick={props.checkAll}>
            <i className={checkAllClass}></i>
          </button>

          <button className="btn btn-default" onClick={props.read} disabled={disabled}>
            Mark As Read
          </button>

          <button className="btn btn-default" onClick={props.unread} disabled={disabled}>
            Mark As Unread
          </button>

          <select className="form-control label-select" onChange={props.addLabel} value={props.selectValue} disabled={disabled}>
            <option>Apply label</option>
            <option value="dev">dev</option>
            <option value="personal">personal</option>
            <option value="gschool">gschool</option>
          </select>

          <select className="form-control label-select" onChange={props.removeLabel} value={props.selectValue} disabled={disabled}>
            <option>Remove label</option>
            <option value="dev">dev</option>
            <option value="personal">personal</option>
            <option value="gschool">gschool</option>
          </select>

          <button className="btn btn-default" onClick={props.deleteMessage} disabled={disabled}>
            <i className="fa fa-trash-o"></i>
          </button>
        </div>
      </div>
)
}
export default Toolbar
