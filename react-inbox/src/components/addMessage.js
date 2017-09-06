import React from 'react'

const AddMessage = (props) => {
  let composeForm = ''
  if(props.showForm === false){
     composeForm = 'hidden'
  } else {
     composeForm = ' '
  }

  return (
    <div className = {composeForm}>
      <form className="form-horizontal well" onSubmit={props.submitMessage}>
        <div className="form-group">
          <div className="col-sm-8 col-sm-offset-2">
            <h4>Compose Message</h4>
          </div>
        </div>
        <div className="form-group">
          <label for="subject" className="col-sm-2 control-label">Subject</label>
          <div className="col-sm-8">
            <input type="text" className="form-control" id="subject" placeholder="Enter a subject" name="subject" value={props.value} onChange={(e) => props.getSubject(e)}></input>
          </div>
        </div>
        <div className="form-group">
          <label for="body" className="col-sm-2 control-label">Body</label>
          <div className="col-sm-8">
            <textarea name="body" id="body" value={props.value} onChange={(e) => props.getBody(e)} className="form-control"></textarea>
          </div>
        </div>
        <div className="form-group">
          <div className="col-sm-8 col-sm-offset-2">
            <input type="submit" value="Send" className="btn btn-primary"></input>
          </div>
        </div>
      </form>
    </div>
  )
}

export default AddMessage
