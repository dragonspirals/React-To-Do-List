import { useState } from "react";


export default function Calendar({ newTask, setNewTask }) {

    const today = new Date();


    // viewMonth - state - 1st day of the visible month
    const [viewMonth, setViewMonth] = useState(new Date(today.getFullYear(), today.getMonth(), 1));
    
    // lastDay - last day of the visible month
    const lastDay = new Date(viewMonth.getFullYear(), viewMonth.getMonth()+1, -1);
    
    // length of the visible month 
    const monthLength = lastDay.getDate();

    /* -------------------------------- functions ------------------------------- */

    // select a date on the calendar 
    function selectDate(date) {

        setNewTask(task=> {
            return ({...task, deadline: date})
        })
    }


    // creates an array of dates for each day of the visible month
    const flatMonth = () => {

        // fillStart - no of empty cells in 1st week of the calendar (so the weekdays align correctly)
        const fillStart = (viewMonth.getDay()+6)%7;
        const array = Array(fillStart).fill("");


        for(let i=0; i<monthLength; i++) {
            const date = new Date(viewMonth.getFullYear(), viewMonth.getMonth(), i+1 );
            array.push(date);
        }

        return array;
    }

    // an array of arrays of dates split into weeks - month=[[week1], [week2],...] 
    function monthInWeeks() {
        const array=[];
        const flatArray = flatMonth();

        for(let i=0; i<flatArray.length; i++) {
            if (i%7===0) {
                array.push(flatArray.slice(i, i+7));
            }
        }

        return array;
    }



/* ----------------------------- table elements ----------------------------- */

/* ------------------------------ change month ------------------------------ */
// changes the visible month 
function ChangeMonth() {

    // set visible month 
    function changeMonth(year, month) {
        const newMonth = new Date(year, month, 1);
        setViewMonth(newMonth);
    }


    // array of months 
    const months = ["January", "February", "March", "April", "May", "June", 
    "July", "August", "September", "October", "November", "December"];

    // first 3 letters of month
    months.short = months.map(month => (month.slice(0,3)));

    // array of the next 20 years
    const years = Array(20).fill(null).map((value, index) => (today.getFullYear()+index));

    return (
        <>
        {/* // previous month */}
        <button className="form-item" onClick={()=>{changeMonth(viewMonth.getFullYear(), viewMonth.getMonth()-1)}}>Previous Month</button>

        {/* // next month  */}
        <button className="form-item" onClick={()=>{changeMonth(viewMonth.getFullYear(), viewMonth.getMonth()+1)}}>Next Month</button>
        
        <br />

        {/* select month */}
        <select className="form-item" value={viewMonth.getMonth()} onChange={(e)=>{changeMonth(viewMonth.getFullYear(), e.target.value)}}>
            {months.map((month, index) => (
                <option key={month} value={index}>{month}</option>
            ))}
        </select>

        {/* select year  */}
        <select className="form-item" value={viewMonth.getFullYear()} onChange={(e)=>{changeMonth(e.target.value, viewMonth.getMonth())}}>
            {years.map((year) => (
                <option key={year} value={year}>{year}</option>
            ))}
        </select>
        </>
    )
}

/* ----------------------- creates a row from an array ---------------------- */
// displays the date in each cell
// each row is 1 week
    function ArrayToRow({ array }) {
        return (
            <tr>
                {array.map((value, index) => {
                    return (

                    // display date if cell not empty 
                    value!=="" ?
                    <td key={value.getDate()} 
                    className={`calendar-date ${value.getTime()===newTask.deadline.getTime() ? "current" : ""}`} 
                    onClick={()=>selectDate(value)}>

                        {value.getDate()}

                    </td>

                     : <td key={"blank" + index}></td>
                )})}
            </tr>
        )
    }

    /* -------------------- create table from array of arrays ------------------- */
    // each element in the array must be an array itself 
    // each element represents 1 week 

    function ArrayToTable({ array }) {
        return (
            <table>
                <tbody>
                    {array.map(rowArray => (
                        <ArrayToRow array={rowArray} key={"row" + rowArray[0]} />
                    ))}
                </tbody>
                
            </table>
        )
    }

    return (
        <div className="calendar-month">
            <div className="calendar">
                <h4>Set Deadline: {newTask.deadline.getDate()}/{newTask.deadline.getMonth()}/{newTask.deadline.getFullYear()}</h4>
                <ChangeMonth />
                <ArrayToTable array={monthInWeeks()} />
            </div>
        </div>
    )
}