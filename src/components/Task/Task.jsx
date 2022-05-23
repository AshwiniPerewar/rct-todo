import React,{useState} from "react";
import styles from "./task.module.css";

import Counter from "../Counter/Counter";
const Task = ({value,deleteTodo}) => {
  // NOTE: do not delete `data-cy` key value pair

  return (
    <li data-cy="task" className={styles.task}>
      <input type="checkbox" data-cy="task-checkbox" className={styles.checkbox} />
     {value}<Counter/>
     <div data-cy="task-text"></div>
      <button data-cy="task-remove-button" onClick={()=>{deleteTodo(value)}}> <span className="material-icons">delete</span></button>
    </li>
  );
};

export default Task;
