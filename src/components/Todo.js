import React from 'react'

function Todo({todo, handleClick}) {
  return (
    <li onClick={handleClick}>{todo.task}</li>
  )
}

export default Todo