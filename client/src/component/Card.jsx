import React from 'react'

export default function Card(props) {
  const { children, title } = props
  return (
    <div className="card">
      <div className="card-body">
        {
          <h4 className="card-title"> {title} </h4>
        }
        {children}
      </div>
    </div>
  )
}