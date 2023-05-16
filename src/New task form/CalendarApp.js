import React, { useState } from "react";
import GenerateOptions, {GenerateMonths} from "./GenerateOptions";
import ArrayToTable from "./ArrayToTable";
import flatDates, {splitWeek} from "./arrayFns.js"


// THIS FILE PROBABLY SHOULD BE SEPARATED INTO SMALLER FILES 
export default function CalendarApp({ updateDate }) {

    const today = new Date();
    
    function DateTable() {

    // month table with interface to change month
    

        const firstOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
        const [viewMonth, setViewMonth] = useState(firstOfMonth);

        

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
            // creates a 2d array corresponsing to the current viewMonth 
            function monthArray() {
                const dateArray = flatDates(firstDay, monthLength);

                // add empty values so the dates line up with days of week
                for (let i=0; i<(firstDay.getDay()-1); i++) {
                    dateArray.unshift("");
                }

                return (splitWeek(dateArray));
            }

            function selectDate(day) {
                updateDate("month", (viewMonth.getMonth()));
                updateDate("year", (viewMonth.getFullYear()));
                updateDate("day", day);
                
            }

            /* --------------------------------- return --------------------------------- */

            return (
                <ArrayToTable className="Calendar-table" array={monthArray()} selectDate={selectDate} />
            )


        }




        const ChangeMonth = () => {


            function showMonth(year, month) {
                const newFirst = new Date(year, month, 1);
                setViewMonth(newFirst);
            }

            const nextMonth = () => {
                showMonth(viewMonth.getFullYear(), viewMonth.getMonth() + 1);
            }

            const lastMonth = () => {
                showMonth(viewMonth.getFullYear(), viewMonth.getMonth() - 1);
            }


            const SelectMonth = () => {
                return (
                    <>
                    <select value={viewMonth.getMonth()} onChange={(e) => showMonth(viewMonth.getFullYear(), e.target.value)}>
                        <GenerateMonths />
                    </select>
                    <select value={viewMonth.getFullYear()} onChange={(e) => showMonth(e.target.value, viewMonth.getMonth())}>
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
    

    return(
        <div className="Calendar-app">
            <h3>Calendar</h3>
            <DateTable />
        </div>
    )
}