import React from "react";

function TodoCard({items,handleDelete,index,handleEdit}) {
  return (
    <li className="todoItem" >
      {items}
 <div className="actionsContainer">
  <button onClick={()=>{
    handleEdit(index)
  }}>
  <i className="fa-solid fa-pen-to-square"></i>
  </button>
<button  onClick={()=>{
    handleDelete(index)
  }}>
<i className="fa-solid fa-trash"></i>
</button>

 </div>
      
    </li>
  );
}

export default TodoCard;
