import { useState } from "react";
import SetDate from "./SetDate";
import './generated-styles/Form.css';

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
    function setTaskName(taskName) {
        setNewTask(task => {
            return {...task, name:taskName}
        })
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
            <div className = "form-item priority-input">
                <select value={newTask.priority} onChange={(e)=> setPriority(e.target.value)}>
                    <option value="">Priority</option>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                </select>
            </div>
        )
    }





    return (
        <form className="Form" onSubmit={handleSubmit}>
            <div className="form-item"><label HtmlFor="New-task">Add New Task </label></div>



            {/* set task name  */}
            <div className="name-input form-item">
                <input type="text" value={newTask.name} onChange={(e)=> setTaskName(e.target.value)}/>
            </div>


            <Priority />
            <SetDate setFunction={setDeadline}/>

            <div className="form-item">
                <input className="form-btn" type="submit" />
            </div>

        </form>
    )
    
}