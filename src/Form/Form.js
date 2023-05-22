import { useState } from "react";
import { v4 as uuid } from 'uuid';

export default function Form({ addTask }) {

    const blankTask = {
        name:"",
        completed: false,
        id: uuid()
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
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={e => {setTaskName(e.target.value)}} value={newTask.name} />
            <input type="submit"></input>
        </form>
    )
}