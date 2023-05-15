import React, { useState } from 'react';
import CompleteTask from './CompleteTask';



// function that returns tasks and checkboxes
let Task = ({ task, completeFn }) => {
  

  const Priority = () => {
    if (task.priority !== "") {
      return (
        <div className="priority" >Priority: {task.priority}</div>
      )
    }
  }

  const Date = () => {

      if (task.hasDeadline === true) {
        return(
          <span>{task.deadline.getDate()}/{task.deadline.getMonth()}/{task.deadline.getFullYear()}</span>
        )
      }
  }



  

  // displays the task if it isnt completed
  if (task.completion !== "complete") {
    return (
      <div className={'task p' + task.priority}>
        <div className="task-name">
          <CompleteTask task={task} completeFn={completeFn} />
          <span>{task.name}</span>
        </div>
        <Priority />
        <Date />
        {/* <Time /> */}
      </div> 
    )
  }
};




 
export default Task;
