import React, { useState } from "react";
import styles from "./addTask.module.css";
import Tasks from "../Tasks/Tasks";
const AddTask = () => {
  // NOTE: do not delete `data-cy` key value pair
  const[todo,setTodo]=useState([]);
  const[value,setValue]=useState("");
  return (
    <div className={styles.todoForm}>
      <input data-cy="add-task-input" type="text" 
      placeholder="Add task..."
      value={value}
       onChange={(e)=>{setValue(e.target.value)}}/>
      <button data-cy="add-task-button" onClick={()=>{
        setTodo([...todo,{id:Date.now(),value:value}])
        setValue("");
        }}>+</button>
        <div>
          {todo.map((todo)=>
          (
            <Tasks todo={todo} id={todo.id} />
          
          ))}
        </div>
    </div>
  );
};

export default AddTask;
