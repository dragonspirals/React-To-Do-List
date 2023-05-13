import React, { useState } from "react";
import Task from "./Task"
import Form from "./Form";
import './generated-styles/Display-tasks.css'


export default function AllTasks() {


    // use state for task list 
    const [taskList, setTaskList] = useState([]);


    function submitTask(task) {
        setTaskList(currentList => {
            return([...currentList, task])
        })
    }

    const DisplayTasks = () => {
        return (
            <div className="Display-tasks" >
                {taskList.map(item => (
                <Task name={item.name} priority={item.priority} deadline={item.deadline}/>
                ))}
            </div>
        )
    }

    // display task form and all tasks 
    return( 
        <div className="All-tasks">  

            {/* task form */}
            <Form submitForm={submitTask} />

            <DisplayTasks />
            

        </div>
    )

}
