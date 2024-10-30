

function TodoInput({handleTodos,todoValue,setTodoValue}) {



  return (
<header>
<input type='text' value={todoValue} placeholder='Enter todo....' onChange={(e)=>{
  setTodoValue(e.target.value)
}} />
<button onClick={()=>{
  handleTodos(todoValue)
  setTodoValue("")
}}>Add</button>
</header>
     
   
  )
}

export default TodoInput