import React, { useState } from "react";
import AddTask from "./AddTask/AddTask";
import TaskHeader from "./TaskHeader/TaskHeader";
import Tasks from "./Tasks/Tasks";
import styles from "./taskApp.module.css";
import Task from  "./Task/Task"
import { v4 as uuidv4 } from 'uuid';

const TaskApp = () => {
  // NOTE: do not delete `data-cy` key value pair
  const[todos,setTodos]=useState([]);
  
  const AddTodo=(x)=>
  {
    setTodos([...todos,{id:uuidv4(), value:x}]);
    
  }

  const deleteTodo=(value)=>
  {
    setTodos(todos.filter((todo)=>todo.value!=value));
    
  }
  return (
    <div data-cy="task-app" className={styles.taskApp}>
      <h1>Todo List</h1>
      <TaskHeader/>
     <AddTask AddTodo={AddTodo}/>
      <Tasks>
        <ul>
      {todos.map((todo)=>
     ( 
        <Task  key={todo.id} value={todo.value} deleteTodo={deleteTodo}/>
    ))}
      </ul>
      </Tasks>

    </div>
  )
};

export default TaskApp;
