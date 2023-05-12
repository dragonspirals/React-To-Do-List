import { useState } from "react";


// creates options in a form for a date 
// setFunction is the function of the parent component which sets a date 
export default function SetDate({ setFunction }) {


    const blankDate = {
        day: "",
        month: "",
        year: "",
        hour:"",
        minute: ""
    }
    // useState for date, 
    const [date, setDate] = useState(blankDate);

    function updateFunction() {
        setFunction(date);
        setDate(blankDate);
    }


    /* ------------------------------ days in month ----------------------------- */

    // use state for num of days in the month 
    const [numDays, setNumDays] = useState(31);

    function daysIn(month) {

        if (["1","3","5","7","8","10","12"].includes(month)) {
            setNumDays(31);
        } else if (["4","6","9","11"].includes(month)) {
            setNumDays(30)
        } else if (month === "2") {
            /* ---------- remember to change this to take into account the year --------- */
            setNumDays(28)}
    }


    /* ------------------------------------ - ----------------------------------- */
    
    // update date within this component (attribute = day | month | year etc. ) 
    function updateDate(attribute, value) {
        if (attribute === "day") {
            setDate(current => {
                return {...current, day:value};
            })


        } else if (attribute === "month") {


            // changes the no of days in month 
            daysIn(value);

            // sets the month 
            setDate(current => {
                return {...current, month:value};
            })   
        } else if (attribute === "year") {
            setDate(current => {
                return {...current, year:value};
            })
        } else if (attribute === "hour") {
            setDate(current => {
                return {...current, hour:value};
            })
        } else if (attribute === "minute") {
            setDate(current => {
                return {...current, minute:value};
            })
        }
        
    }

    /* ------------------- generate numerical options function ------------------ */
    function GenerateOptions({ start, step, number }) {

        // start    -   first option value
        // step     -   step between values
        // number   -   how many options

        function createArray(length) {
            var array = [];
            for (let i=0; i<length; i++) {

                var value = start + (step*i)
                array.push(value);
            }
            return array;
        }


        return (
            <>
            {createArray(number).map(index => (
                <option value = {index}>{index}</option>
            ))}
            </>
        )

    }


    /* -------------------- selects for date, month, year etc ------------------- */

    // day 
    const Day = () => {

        return (
            <select value={date.day} onChange={(e)=> updateDate("day", e.target.value)}>
                <option value={""}>Day</option>
                <GenerateOptions start={1} step ={1} number={numDays} />
            </select>
        )
    }

    // month
    const Month = () => {
        return (
            <select value={date.month} onChange={(e)=> updateDate("month", e.target.value)}>
                <option value={""}>Month</option>
                <GenerateOptions start={1} step ={1} number={12} />
            </select>
        )
    }

    const Year = () => {
        return (
            <select value={date.year} onChange={(e)=> updateDate("year", e.target.value)}>
                <option value={""}>Year</option>
                <GenerateOptions start={2023} step ={1} number={10} />
            </select>
        )
    }

    const Hour = () => {
        return (
            <select value={date.hour} onChange={(e)=> updateDate("hour", e.target.value)}>
                <option value={""}>Hour</option>
                <GenerateOptions start={0} step ={1} number={24} />
            </select>
        )
    }

    const Minute = () => {
        return (
            <select value={date.minute} onChange={(e)=> updateDate("minute", e.target.value)}>
                <option value={""}>Minute</option>
                <GenerateOptions start={0} step ={15} number={4} />
            </select>
        )
    }

    return (
        <div>
            <Day />
            <Month />
            <Year />
            <Hour />
            <Minute />
            <button onClick={updateFunction}>Submit</button>
        </div>    
    )
}
