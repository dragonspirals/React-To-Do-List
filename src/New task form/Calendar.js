import { useState, useCallback, useEffect } from "react";
import GenerateOptions from "./GenerateOptions";
import CalendarApp from "./CalendarApp";

export default function Calendar({ newTask, setFunction }) {
    // renders only if show===true - later can create an animation or somethin maybe

    // todays date 
    const today = new Date();


    
    // the date state 
    const [dateState, setDateState] = useState(new Date());
    



    // parent component date
    const callbackUpdate = useCallback(()=>setFunction(dateState), [setFunction, dateState]);
    useEffect(callbackUpdate, [dateState]);



    // update the date - first set calDate=dateState, then update datestate 
    const updateDate = (attribute, value) => {

        // create a date from date state
        const calDate = new Date();
        calDate.setDate(dateState.getDate());
        calDate.setMonth(dateState.getMonth());
        calDate.setFullYear(dateState.getFullYear());


        // update calDate 
        if (attribute==="day") {
            calDate.setDate(value);
        }

        else if (attribute==="month") {
            calDate.setMonth(value);
        }

        else if (attribute==="year") {
            calDate.setFullYear(value);
        }

        
        setDateState(calDate);
    }


    /* --------------------------------- months --------------------------------- */

    // an array of months
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    // month select options 
    const MonthOptions = () => {
        return (
            <>
            {months.map(month => (
                <option value = {months.indexOf(month)}>{month}</option>
            ))}
            </>
        )
    }




    /* --------------------------------- return --------------------------------- */
    if (newTask.hasDeadline === true) {
        const calendarDisplay="show-display";
        return (
            <div className={`form-calendar ${calendarDisplay}`}>

                <h3>Set Deadline</h3>
                {/* day  */}
                <select value={newTask.deadline.getDate()} onChange={(e) => updateDate("day", e.target.value)}>
                    <GenerateOptions start={1} step={1} number={31} />
                </select>
    
    
    
    
                {/* month */}
                <select value={newTask.deadline.getMonth()} onChange={(e) => updateDate("month", e.target.value)}>
                    <MonthOptions />
                </select>
    
    
    
                {/* year  */}
                <select value={newTask.deadline.getFullYear()} onChange={(e) => updateDate("year", e.target.value)}>
                    <GenerateOptions start={today.getFullYear()} step={1} number={5} />
                </select>


                <CalendarApp  updateDate={updateDate}/>
    
            </div>
        )
    }
}