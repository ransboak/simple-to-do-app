import React from 'react'
import { AiFillDelete } from 'react-icons/ai'
import { TiTick } from 'react-icons/ti'

const Task = (props) => {
  return (
    <div
      className="task"
      style={{ display: 'flex' }}
    >
      <h1>{props.taskName}</h1>
      <div className="buttons">
      <button style={{ border: props.completed &&  'none', background: props.completed && 'transparent'}} onClick={() => props.completeTask(props.id)}> { props.completed ? <TiTick className='tick' style={{ color: 'green', background: 'transparent'}}  /> : "Completed" } </button>
      <button style={{border: 'none',background: 'red', marginLeft: '1rem'}} onClick={() => props.deleteTask(props.id)}> <AiFillDelete style={{color : 'white'}} /> </button>
      </div>
      
    </div>
  )
}

export default Task