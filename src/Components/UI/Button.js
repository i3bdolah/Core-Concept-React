import React from 'react'

const Button = (props) => {
  return (
    <div>
      <button
        className="px-8 py-1 bg-white rounded-md border-slate-100 m-3 shadow-lg "
        type={props.type}
        onClick={props.onClick}
      >
        {props.children}
      </button>
    </div>
  )
}

export default Button
