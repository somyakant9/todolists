import React from "react";
import styles from "./addTask.module.css";


const AddTask = ({handleChange,setTask,task}) => {
  // NOTE: do not delete `data-cy` key value pair
 


  return (
    <div className={styles.addTask}>
      <input data-cy="add-task-input" type="text" placeholder="Add Task" value={task} onChange={(e)=>{setTask(e.target.value)}} />
      <button data-cy="add-task-button" onClick={handleChange}><img className={styles.img} src="https://cdn-icons.flaticon.com/png/512/5249/premium/5249076.png?token=exp=1653298271~hmac=27c5e1813a7e58a50e44a4510715aeba" alt="add"/></button>
    </div>
  );  
};

export default AddTask;
