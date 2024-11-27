import React from 'react'

const TodoList = ({text, id, key, deleteTodo, updateTodo}) => {
  return (
    <div className='h-10 w-96 flex gap-x-2'>
        <input type="text" className='h-7 w-60 border-none outline-none rounded-lg px-3' value={text} readOnly />
        <button className='h-7 px-1 border-none outline-none rounded-lg bg-slate-800 text-white' onClick={() => {updateTodo(id)}}>Update</button>
        <button className='h-7 px-1 border-none outline-none rounded-lg bg-slate-800 text-white' onClick={() => {deleteTodo(id)}}>Delete</button>

    </div>
  )
}

export default TodoList
