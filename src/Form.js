import { useState } from "react";
import SetDate from "./SetDate";

/* -------------------------------------------------------------------------- */
/*                            form to add new tasks                           */
/* -------------------------------------------------------------------------- */

export default function TaskForm( { submitForm } ) {


    // blank task for resetting task state after submit
    const blankTask = {
        name:"",
        completion: "incomplete",
        priority:"",
        deadline:"" }

    
    const [newTask, setNewTask] = useState(blankTask);


    
    // submit form
    function handleSubmit(e) {
        if (newTask.name === "") {
            e.preventDefault();
        } else if (newTask !== blankTask) {
            e.preventDefault();
            submitForm(newTask);
            setNewTask(blankTask);
        }
    }


    /* -------------------------------- functions ------------------------------- */
    

    /* ------------------------- set new task properties ------------------------ */
    // task name
    function setTask(taskName) {
        setNewTask({
            name:taskName,
            completion: "incomplete",
            priority:"",
            deadline:""
        });
    }

    /* -------------------------------- priority -------------------------------- */
    function setPriority(priority) {
        setNewTask(task => {
            return {...task , priority:priority}
        })
    }



    /* -------------------------------- deadline -------------------------------- */
    function setDeadline(deadline) {

        // this function will be passed down to the set Date componenet
        setNewTask(current => {
            return {...current, deadline:deadline}})
            
        
    }
    
    



    /* ----------------------------- Form components ---------------------------- */

    // priority 
    const Priority = () => {
        return (
            <select value={newTask.priority} onChange={(e)=> setPriority(e.target.value)}>
                <option value="">Priority</option>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
            </select>
        )
    }





    return (
        <form onSubmit={handleSubmit}>
            <label HtmlFor="New-task">Add New Task </label>

            {/* input task name */}
            <input type="text" value={newTask.name} onChange={(e)=> setTask(e.target.value)}/>

            <Priority />
            <SetDate setFunction={setDeadline}/>


        </form>
    )
    
}