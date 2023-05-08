import React, { useState } from "react";
import Task from "./Task"


export default function AllTasks() {


    

    // use state for task list 
    const [taskList, setTaskList] = useState([{name:"example task", priority:""}]);


    // form to add new tasks 
    function TaskForm() {

        // USE STATE - new Task
        const [newTask, setNewTask] = useState({
            name:"",
            completion: "incomplete",
            priority:"",
            deadline:""
        });

        
        function setTask(taskName) {
            setNewTask({
                name:taskName,
                completion: "incomplete",
                priority:"",
                deadline:""
            });
        }

        function setPriority(priority) {
            setNewTask(task => {
                return {...task , priority:priority}
            })
        }

        function setDeadline(deadline) {
            setNewTask(task => {
                return {...task, deadline:deadline}
            })
        }


        // add a task to taskList
        function AddTask() {
            setTaskList(currentList => {
                return([...currentList, newTask])
            })
        }

        


        return (
            <form onSubmit={AddTask}>
                <label for="New-task">Add New Task </label>
                <input type="text" onChange={(e)=> setTask(e.target.value)}/>
                <select onChange={(e)=> setPriority(e.target.value)}>
                    <option value="">Priority</option>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                </select>
                <input type="submit"/>
            </form>
        )
    }


    // display task form and all tasks 
    return( 
        <div className="All-tasks">  

            {/* task form */}
            <TaskForm />

            {/* display all tasks  */}
            {taskList.map(item => (
                <>
                <Task name={item.name} priority={item.priority}/>
                </>
                ))}

        </div>
    )

}
