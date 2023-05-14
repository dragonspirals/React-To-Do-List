import React, { useState } from "react";
import '../generated-styles/Form.css';
import Calendar from "./Calendar";
import CalendarApp from "./CalendarApp";

/* -------------------------------------------------------------------------- */
/*                            form to add new tasks                           */
/* -------------------------------------------------------------------------- */

export default function TaskForm( { submitForm } ) {


    // blank task for resetting task state after submit
    const blankTask = {
        name:"",
        completion: "incomplete",
        priority:"",
        hasDeadline: false,
        deadline: new Date()
        }

    
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
            <div className = "form-item-div form-priority">
                <select className="form-item" value={newTask.priority} onChange={(e)=> setPriority(e.target.value)}>
                    <option value="">Priority</option>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                </select>
            </div>
        )
    }



    const DeadlineBtn = () => {

        if (newTask.hasDeadline===true) {
            var buttonText = "Remove Deadline"
        } else {
            buttonText = "Add Deadline"
        }

        const toggleShow = () => {

            // hide => show 
            if (newTask.hasDeadline === false) {
                setNewTask(current => {
                    return {...current, hasDeadline:true}
                })
            } 
            
            // show => hide 
            else {
                setNewTask(current => {
                    return {...current, hasDeadline:false}
                })
            }
        }

        
        return (
            <div className="form-item-div deadline-btn">
                <button className="form-btn" onClick={toggleShow}>{buttonText}</button>
            </div>
        )
    }




    return (
        <form className="Form" onSubmit={handleSubmit}>
            <div className="form-item-div form-label">
                <label className="form-item" HtmlFor="New-task">Add New Task </label>
            </div>



            {/* set task name  */}
            <div className="form-name form-item-div">
                <input className="form-item" type="text" value={newTask.name} onChange={(e)=> setTaskName(e.target.value)}/>
            </div>


            <Priority />
            <DeadlineBtn />
            <Calendar show={newTask.hasDeadline} setFunction={setDeadline} />
            {/* <CalendarApp /> */}

            <div className="form-item-div form-submit">
                <input className="form-btn form-item" type="submit" />
            </div>

        </form>
    )
    
}