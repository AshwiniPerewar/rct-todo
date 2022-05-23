import React from "react";
import styles from "./tasks.module.css";

const Tasks = (props) => {
  // NOTE: do not delete `data-cy` key value pair
  return (
    <div key={props.id}>
      <ul data-cy="tasks" className={styles.tasks}>
        {props.value}
      </ul>
      <div data-cy="tasks-empty" className={styles.empty}>
        {/* Show when No Tasks are present */}
      </div>
      </div>
  );
};

export default Tasks;
