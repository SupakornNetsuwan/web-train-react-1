import React from 'react'

const Note = (props) => {
  
  return (
    <div className='p-4 rounded border'>
      <p className='text-slate-600'>Note : {props.index}</p>
      <p>{props.message}</p>
    </div>
  )
}

export default Note