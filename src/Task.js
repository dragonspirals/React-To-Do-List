import React, { useState } from 'react';



// function that returns tasks and checkboxes
let Task = ({ name, priority, deadline }) => {
  
  const [status, setStatus] = useState("not started");

  let completeTask = () => {
    setStatus("complete");
  }

  const Priority = () => {
    if (priority !== "") {
      return (
        <div className="priority" >Priority: {priority}</div>
      )
    }
  }

  const Date = () => {
      if (deadline.day!=="" && deadline.month!=="" && deadline.year!=="" ) {
        return (
          <span>{deadline.day}/{deadline.month}/{deadline.year}</span>
        )
      }
  }

  const Time = () => {
    if (deadline.hour!=="" && deadline.minute !=="") {
      return (
        <span>{deadline.hour}:{deadline.minute}</span>
      )
    }
  }


  

  // displays the task if it isnt completed
  if (status !== "complete") {
    return (
      <div className={'task p' + priority}>
        <div className="task-name">
          <input type="checkbox" onChange={completeTask}></input>
          <span>{name}</span>
        </div>
        <Priority />
        <Date />
        <Time />
      </div> 
    )
  }
};




 
export default Task;
