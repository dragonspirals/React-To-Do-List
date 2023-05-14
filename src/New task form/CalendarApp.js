import React, { useState } from "react";
import GenerateOptions, {GenerateMonths} from "./GenerateOptions";



// THIS FILE PROBABLY SHOULD BE SEPARATED INTO SMALLER FILES 
export default function CalendarApp() {


    const today = new Date();

    const weekDay = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    
    function DateTable() {
      


        /* ------------------------ array to table functions ------------------------ */

        // array becomes row with array elements 
        const ArrayToRow = ({ array }) => {
            return (
                <tr>
                    {array.map(cell => (
                        <td className="table-box">{cell}</td>
                    ))}
                </tr>
            )
        }

       

        // 2d array becomes table with array elements being rows 
        const ArrayToTable = ({ array }) => {
        
            return(
                <table>

                    <tr>
                        {weekDay.map(cell => (
                            <th className="table-headings">{cell}</th>
                        ))}
                    </tr>

                    {array.map(row => (
                        <ArrayToRow array={row} />
                    ))}
                </table >
            )
        }


        /* --------------------------- date array to table -------------------------- */

        // creates a table of the inputted month sorted by weeks
        const MonthTable = ({ year, month }) => {


            /* ----------------------------- date constants ----------------------------- */
            // first day of this month 
            const firstDay = new Date(year, month, 1);

            // get last day of the month
            const endDay = new Date(firstDay);
            endDay.setMonth(firstDay.getMonth() + 1);
            endDay.setDate(endDay.getDate()-1);

            // month length (= date of last day of month)
            const monthLength = endDay.getDate();


            /* -------------------------------- functions ------------------------------- */

            // splits an array into sub-arrays of length 7 
            function splitWeek(flatArray) {

                const newArray = [];

                for (let i=0; i<flatArray.length; i++) {
                    // create an array for each week inside array 
                    if (i%7 === 0) {
                        const weekArray = [];
                        newArray.push(weekArray);
                    }

                    newArray[Math.floor(i/7)].push(flatArray[i]);
                }

                return(newArray);
            }

            // flat array of dates
            function flatDates(startDate, numDays) {
                const array = [];

                for (let i=0; i<numDays; i++) {
                    const date = new Date();

                    date.setDate(startDate.getDate() + i);
                    array.push(date.getDate());
                }

                return array;
            }

            function monthArray() {
                const dateArray = flatDates(firstDay, monthLength);

                // add empty values so the dates line up with days of week
                for (let i=0; i<(firstDay.getDay()-1); i++) {
                    dateArray.unshift("");
                }

                return (splitWeek(dateArray));
            }

            /* --------------------------------- return --------------------------------- */

            return (
                <ArrayToTable className="Calendar-table" headings={[weekDay]} array={monthArray()} />
            )


        }


        // month table with interface to change month
        const ChangeMonthTable = () => {

            const firstOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
            const [viewMonth, setViewMonth] = useState(firstOfMonth);

            

            const ChangeMonth = () => {
                function setMonth(year, month) {
                    const newFirst = new Date(year, month, 1);
                    setViewMonth(newFirst);
                }

                const nextMonth = () => {
                    setMonth(viewMonth.getFullYear(), viewMonth.getMonth() + 1);
                }

                const lastMonth = () => {
                    setMonth(viewMonth.getFullYear(), viewMonth.getMonth() - 1);
                }


                const SelectMonth = () => {
                    return (
                        <>
                        <select value={viewMonth.getMonth()} onChange={(e) => setMonth(viewMonth.getFullYear(), e.target.value)}>
                            <GenerateMonths />
                        </select>
                        <select value={viewMonth.getFullYear()} onChange={(e) => setMonth(e.target.value, viewMonth.getMonth())}>
                            <GenerateOptions start = {today.getFullYear()} step={1} number={5} />
                        </select>
                        </>
                    )
                }
                return (
                    <>
                    <SelectMonth />
                    <button className="form-btn" onClick={lastMonth}>Previous Month</button>
                    <button className="form-btn" onClick={nextMonth}>Next Month</button>                    
                    </>
                )
            }

            return (
                <>
                <ChangeMonth />
                <p>{viewMonth.toLocaleString('default', { month: 'long' })}  {viewMonth.getFullYear()}</p>
                <MonthTable year={viewMonth.getFullYear()} month={viewMonth.getMonth()} />
                </>
            )
        }

        return (
            <>
            <ChangeMonthTable />
            </>
        )

        

    }
    
    return(
        <div className="Calendar-app">
            <h3>Calendar</h3>
            <DateTable />
        </div>
    )
}