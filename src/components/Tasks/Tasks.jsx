import React from "react";
import styles from "./tasks.module.css";
import Task from "../Task/Task";

const Tasks = ({ task1,id }) => {
  // NOTE: do not delete `data-cy` key value pair
  return (
    <>
      <ul data-cy="tasks" className={styles.tasks}>
        {/* Task List */}
        <div>
          <li key={id}>
          {task1.map((task1)=>(
          <div>{task1.text}</div>
        ))}
            <Task id={id}/>
          </li>
        </div>





      </ul>
      <div data-cy="tasks-empty" className={styles.empty}>
        {/* Show when No Tasks are present */}
      </div>
    </>
  );
};

export default Tasks;
