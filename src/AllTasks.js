import React, { useState } from "react";
import Task from "./Task"
import Form from "./New task form/Form";
import './generated-styles/Display-tasks.css'
import CompleteTask from "./CompleteTask";


export default function AllTasks() {


    // use state for task list 
    const [taskList, setTaskList] = useState([]);


    function submitTask(task) {
        setTaskList(currentList => {
            return([...currentList, task])
        })
    }


    function completeTask(task) {
        const index = taskList.indexOf(task);
        const newList = taskList.toSpliced(index, 1);
        setTaskList(newList);
    }



    /* --------------------------------- display -------------------------------- */
    const DisplayTasks = () => {
        return (
            <div className="Display-tasks" >
                {taskList.map(item => (
                    <>
                    <Task task={item} key={item.id} completeFn={completeTask}/>
                    </>
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
