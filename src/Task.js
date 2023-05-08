import React, { useState } from 'react';



// function that returns tasks and checkboxes
let Task = (props) => {
  
  const [status, setStatus] = useState("not started");

  let completeTask = () => {
    setStatus("complete");
  }

  const Priority = () => {
    if (props.priority !== "") {
      return (
        <div className="priority" >Priority: {props.priority}</div>
      )
    }
  }

  // displays the task if it isnt completed
  if (status !== "complete") {
    return (
      <div className={'task p' + props.priority}>
        <div className="task-name">
          <input type="checkbox" onChange={completeTask}></input>
          <span>{props.name}</span>
        </div>
        <Priority />
      </div> 
    )
  }
};




 
export default Task;
