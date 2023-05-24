import { useState } from "react";
import { v4 as uuid } from 'uuid';
import Priority from "./Priority";

export default function Form({ addTask }) {

    const blankTask = {
        name:"",
        completed: false,
        id: uuid(),
        priority:""
    }
    const [newTask, setNewTask] = useState(blankTask);

    function handleSubmit(e) {
        e.preventDefault();
        addTask(newTask);
        setNewTask(blankTask);
    }

    function setTaskName(name) {
        setNewTask(current => {
            return {...current, name: name }
        })
    }

    return (
        <form className="task-form" onSubmit={handleSubmit}>
            <h3>Add New Task</h3>
            <input type="text" onChange={e => {setTaskName(e.target.value)}} value={newTask.name} />
            <Priority newTask={newTask} setNewTask={setNewTask} />

            <input type="submit"></input>
        </form>
    )
}