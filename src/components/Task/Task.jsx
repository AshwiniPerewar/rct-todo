import React,{useState} from "react";
import styles from "./task.module.css";

const Task = ({value,deleteTodo}) => {
  // NOTE: do not delete `data-cy` key value pair

  const[count,setCount]=useState(1);
  return (
    <li data-cy="task" className={styles.task}>
      <input type="checkbox" data-cy="task-checkbox" className={styles.checkbox} />
     {value}
     <div data-cy="task-text"></div>
     <button onClick={()=>{setCount(count+1)}} className={styles.plus}>+</button>{count}<button onClick={()=>{setCount(count-1)}}>-</button>
      <button data-cy="task-remove-button" onClick={()=>{deleteTodo(value)}}> <span className="material-icons">delete</span></button>
    </li>
  );
};

export default Task;
