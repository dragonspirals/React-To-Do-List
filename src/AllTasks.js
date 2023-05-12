import React, { useState } from "react";
import Task from "./Task"
import Form from "./Form";


export default function AllTasks() {


    // use state for task list 
    const [taskList, setTaskList] = useState([]);


    function submitTask(task) {
        setTaskList(currentList => {
            return([...currentList, task])
        })
    }

    // display task form and all tasks 
    return( 
        <div className="All-tasks">  

            {/* task form */}
            <Form submitForm={submitTask} />

            {/* display all tasks  */}
            {taskList.map(item => (
                <>
                <Task name={item.name} priority={item.priority} deadline={item.deadline}/>
                </>
                ))}

        </div>
    )

}
