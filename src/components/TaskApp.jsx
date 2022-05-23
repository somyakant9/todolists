import React, { Children } from "react";

import styles from "./taskApp.module.css";
import TaskHeader from "./TaskHeader/TaskHeader";
import AddTask from "./AddTask/AddTask";
import Tasks from './Tasks/Tasks'
const TaskApp = () => {
  // NOTE: do not delete `data-cy` key value pair

  const [task1, setTask1] = React.useState([]);
  const [task ,setTask] = React.useState("");

  const handleChange = () => {

    setTask1([...task1, {
      id: Date.now(),
      text: task,
      done: false,
      count: 0
    }]);
    setTask("");
  }


  return (
    <div data-cy="task-app" className={styles.taskApp}>
      {/* Header */}
      {/* Add Task */}
      {/* Tasks */}

      <TaskHeader/>
      <AddTask setTask={setTask} handleChange={handleChange} />
      <Tasks task1={task1}/>
    </div>
  );
};

export { TaskApp };
