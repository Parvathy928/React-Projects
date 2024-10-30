import React from 'react'
import TodoCard from './TodoCard'

function TodoList({todos,handleDelete,handleEdit}) {
  

  
  return (
  <ul className='main'>
{
  todos.map((items,index)=>{
    return(

 <TodoCard key={index} index={index} items={items} handleDelete={handleDelete} handleEdit={handleEdit}/>


    )
  })
}
 </ul>
  )
}

export default TodoList