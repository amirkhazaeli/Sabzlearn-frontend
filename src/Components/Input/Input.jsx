import React from 'react'
import './Input.css'
export default function Input(props) {
  return (
    <div className='input'>
       <input type={props.type}
        placeholder={props.placeholder}
        className={props.className}
        />
    </div>
  )
}
