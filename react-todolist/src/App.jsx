


import { useState,useEffect } from "react"
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"



function App() {


 const [todos,setTodos] =useState([])
 const [todoValue,setTodoValue] =useState("")

 function handleTodos(newTodo){
   const newTodoList=[...todos,newTodo]
   setTodos(newTodoList)
   localStorage.setItem("todos",JSON.stringify(newTodoList))
 }

 function handleDelete(index){
   const newTodoList=todos.filter((todo,todoIndex)=>{
    return todoIndex!==index
   })
    setTodos(newTodoList)
    localStorage.setItem("todos",JSON.stringify(newTodoList))
 }

function handleEdit(index){
  const newTodoEdit=todos[index]
  setTodoValue(newTodoEdit)
  handleDelete(index)
}

useEffect(()=>{
const StoredTodo=localStorage.getItem("todos");
if(StoredTodo){
   setTodos(JSON.parse(StoredTodo))
}},[])

  return (
   <>
   <TodoInput handleTodos={handleTodos} todoValue={todoValue} setTodoValue={setTodoValue}/>
   <TodoList handleDelete={handleDelete} todos={todos} handleEdit={handleEdit} />

   </>
  )
}

export default App;
