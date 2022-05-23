import React from "react";
import styles from "./task.module.css";
import Counter from "../Counter/Counter";
const Task = ({task1,id}) => {
  // NOTE: do not delete `data-cy` key value pair
  const[list , setList] = React.useState(task1);

  const change =()=>{

    let newlist = list.filter((list)=>(list.id !== id));
    setList(newlist);
    
  }
  return (
    <li data-cy="task" className={styles.task}>
      <input type="checkbox" data-cy="task-checkbox" />
      <div data-cy="task-text">
      </div>
      {/* Counter here */}<div><Counter/></div>
      <button data-cy="task-remove-button" onClick={change}>Remove</button>
    </li>
  );
};

export default Task;
