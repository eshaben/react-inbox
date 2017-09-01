import React from 'react';

const Toolbar = (props) => {
  const some = 'fa fa-minus-square-o'
  const all = 'fa fa-check-square-o'
  const none = 'fa fa-square-o'

  let checkAllClass=''

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

  return (
  <div className="row toolbar">
    <div className="col-md-12">
      <p className="pull-right">
        <span className="badge badge">2</span>
        unread messages
      </p>

      <button className="btn btn-default" onClick={props.checkAll}>
        <i className={checkAllClass}></i>
      </button>

      <button className="btn btn-default">
        Mark As Read
      </button>

      <button className="btn btn-default">
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

      <button className="btn btn-default">
        <i className="fa fa-trash-o"></i>
      </button>
    </div>
  </div>
)
}
export default Toolbar
