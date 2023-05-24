import { useState } from "react";
import { v4 as uuid } from 'uuid';
import Priority from "./Priority";
import Deadline from "./Deadline";

export default function Form({ addTask }) {
    const blankTask = {
        name:"",
        completed: false,
        id: uuid(),
        priority:"",
        deadline: new Date(),
        hasDeadline:false
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

    function showDeadline(e) {
        e.preventDefault();
        setNewTask(current => {
            return {...current, deadline: new Date(), hasDeadline: !newTask.hasDeadline }
        })
    }

    return (
        <form className="task-form" onSubmit={handleSubmit}>
            <h3>Add New Task</h3>
            <input type="text" onChange={e => {setTaskName(e.target.value)}} value={newTask.name} />
            <Priority newTask={newTask} setNewTask={setNewTask} />

            <button onClick={showDeadline}>Deadline</button>
            {newTask.hasDeadline && <Deadline newTask={newTask} setNewTask={setNewTask} />}
            

            <input type="submit"></input>
        </form>
    )
}