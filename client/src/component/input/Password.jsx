import React, { useState } from 'react'

export default function Password(props) {
  const [show, setShow] = useState(false)
  const { label, name, id, inputRef } = props
  return (
    <div className="form-group">
      <label htmlFor={id}> {label} </label>
      <div className="input-group">
        <input className="form-control" name={name} id={id} ref={inputRef} type={(show) ? 'text' : 'password'} />
        <div className="input group-append">
          <button type="button" onClick={() => setShow(!show)} className="btn btn-primary">
            {
              (show) ? <i className="fa fa-eye-slash"></i> : <i className="fa fa-eye"></i>
            }
          </button>
        </div>
      </div>
    </div>
  )
}