import { useState, useEffect, useCallback } from "react";




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
    
    // callback fn to update date to the parent component 
    const callbackUpdate = useCallback(()=>setFunction(date), [setFunction, date]);
    useEffect(callbackUpdate, [date]);

    // toggle show date if user wants to set a deadline 
    var [show, setShow] = useState(false);


    /* ------------------------------ days in month ----------------------------- */

    // use state for num of days in the month 
    const [numDays, setNumDays] = useState(31);


    // changes how many days in the selected month 
    function daysIn(month) {


        // for 31 day months
        if (["1","3","5","7","8","10","12"].includes(month)) {
            setNumDays(31);
        } 
        
        // for 30 day months 
        else if (["4","6","9","11"].includes(month)) {
            setNumDays(30)
        } 
        
        // for whatever the hell february is up to 
        else if (month === "2") {
            console.log(month);
            if (date.year%4 === 0) {
                setNumDays(29);
            } else {
                setNumDays(28);
            }
        }
    }


    /* ---------------------- update date within component ---------------------- */
    // update date within this component (attribute = day | month | year etc. ) 

    function updateDate(attribute, value) {


        if (attribute === "day") {
            setDate(current => {
                return {...current, day:value};
            })
        } 
        
        
        else if (attribute === "month") {
            // changes the no of days in month 
            daysIn(value);

            // sets the month 
            setDate(current => {
                return {...current, month:value};
            })
        }
        
        
        else if (attribute === "year") {


            // no of days in a month for leap yrs
            // ????? this is setting num days but isnt rerendering the Day component 
            daysIn(String(date.month));

            // sets year 
            setDate(current => {
                return {...current, year:value};
            })

        } 
        
        
        else if (attribute === "hour") {
            setDate(current => {
                return {...current, hour:value};
            })
        } 
        
        
        else if (attribute === "minute") {
            setDate(current => {
                return {...current, minute:value};
            })
        }
        
    }

    /* ----------------------- generate numerical options ----------------------- */
    //  generates select options for numbers

    function GenerateOptions({ start, step, number }) {

        // start    -   first option value
        // step     -   step between values
        // number   -   how many options to generate


        // create an array of same length as number
        function createArray(length) {
            var array = [];
            for (let i=0; i<length; i++) {

                var value = start + (step*i)
                array.push(value);
            }
            return array;
        }


        // map array to each option 

        return (
            <>
            {createArray(number).map(index => (
                <option value = {index}>{index}</option>
            ))}
            </>
        )

    }


    /* ---------------------------------- date ---------------------------------- */
        // shows selects for day, month, ...

    const Date = () => {


        /* ---------------------------- select components --------------------------- */

        const Day = () => {

            return (
                <select className="date-select day" value={date.day} onChange={(e)=> updateDate("day", e.target.value)}>
                    <option value={""}>Day</option>
                    <GenerateOptions start={1} step ={1} number={numDays} />
                </select>
            )
        }

        const Month = () => {
            return (
                <select className="date-select month" value={date.month} onChange={(e)=> updateDate("month", e.target.value)}>
                    <option value={""}>Month</option>
                    <GenerateOptions start={1} step ={1} number={12} />
                </select>
            )
        }

        const Year = () => {
            return (
                <select className="date-select year" value={date.year} onChange={(e)=> updateDate("year", e.target.value)}>
                    <option value={""}>Year</option>
                    <GenerateOptions start={2023} step ={1} number={10} />
                </select>
            )
        }

        const Hour = () => {
            return (
                <select className="date-select hour" value={date.hour} onChange={(e)=> updateDate("hour", e.target.value)}>
                    <option value={""}>Hour</option>
                    <GenerateOptions start={0} step ={1} number={24} />
                </select>
            )
        }

        const Minute = () => {
            return (
                <select className="date-select minute" value={date.minute} onChange={(e)=> updateDate("minute", e.target.value)}>
                    <option value={""}>Minute</option>
                    <GenerateOptions start={0} step ={15} number={4} />
                </select>
            )
        }


    /* ------------------------------- return date ------------------------------ */
        if (show === true) {
            return (
                <div className="Date">
                    <Day />
                    <Month />
                    <Year />
                    <Hour />
                    <Minute />
                </div>
            )
        }
    }
    


    /* ------------------------ dropdown for setting date ----------------------- */
    // creates an option to show/hide date section  


    const DateDropdown = () => {

        


        function toggleShow() {
            if (show===false) {
                setShow(true)
            } else {setShow(false)}
        }


        /* ------------------------------- show button ------------------------------ */
        // shows or hides the set date section

        const ShowBtn = () => {

            if (show === true) {
                var btnText = "Remove Deadline";
            } else {
                btnText = "Add Deadline";
            }
            return (
                <button className="form-btn" onClick={toggleShow}>{btnText}</button>
            )
        }


        
        

        return (
            <div className="Set-date form-item">
                <ShowBtn />
                <Date show={show}/>
            </div>
        )
        
        
    }

    return (
        <>
        <DateDropdown />
        </>
    )
}
