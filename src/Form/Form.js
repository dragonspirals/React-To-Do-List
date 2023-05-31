import { useState } from "react";
import { v4 as uuid } from 'uuid';
import Priority from "./Priority";
import Calendar from "./Calendar";
import EHower from "./EHower";

export default function Form({ addTask }) {

    
    
    const blankTask = {
        name:"",
        completed: false,
        id: uuid(),
        priority:"",
        deadline: new Date(),
        hasDeadline:false,
        eHower: [null, null],
        hasEHower: false,
    }

    const [newTask, setNewTask] = useState(blankTask);



    function handleSubmit(e) {
        e.preventDefault();

        if (newTask.name==="") {
            return;
        }
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

    function showEHower(e) {
       
        e.preventDefault();
        setNewTask(current => {
            return {...current, eHower: [50, 50], hasEHower: !newTask.hasEHower }
        })
    }

    return (
        <form className="task-form" onSubmit={handleSubmit}>

            <h3 className="form-item">Add New Task</h3>
            
            <input className="form-item" placeholder="Task Name" type="text" onChange={e => {setTaskName(e.target.value)}} value={newTask.name} />
            
            <Priority newTask={newTask} setNewTask={setNewTask} />


            {/* deadline */}
            <button className="form-item" onClick={showDeadline}>{!newTask.hasDeadline ? "Show": "Hide"} Deadline</button>
            {newTask.hasDeadline && <Calendar newTask={newTask} setNewTask={setNewTask} />}


            {/* eisenhower matrix */}
            <button className="form-item" onClick={showEHower}>{!newTask.showEHower ? "Show": "Hide"} Eisenhower Matrix</button>
            {newTask.hasEHower && <EHower newTask={newTask} setNewTask={setNewTask} />}
            

            <input className="button" type="submit"></input>

            <p>Urgency: {newTask.eHower[0]}%, Importance: {newTask.eHower[1]}%</p>

        </form>
    )
}