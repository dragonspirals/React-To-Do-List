import { useState } from "react";


export default function Calendar() {


    const today = new Date();

    const [viewMonth, setViewMonth] = useState(new Date(today.getFullYear(), today.getMonth(), 1));
    
    const lastDay = new Date(viewMonth.getFullYear(), viewMonth.getMonth()+1, -1);
    

    const monthLength = lastDay.getDate();

    /* -------------------------------- functions ------------------------------- */

    const flatMonth = () => {
        const fillStart = (viewMonth.getDay()+6)%7;
        console.log(fillStart);

        const array = Array(fillStart).fill("");
        for(let i=0; i<monthLength; i++) {
            const date = new Date(viewMonth.getFullYear(), viewMonth.getMonth(), i+1 );
            array.push(date);
        }
        return array;
    }

    // an array of arrays - month=[[week1], [week2],...] 
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
function ChangeMonth() {



    function changeMonth(year, month) {
        const newMonth = new Date(year, month, 1);
        setViewMonth(newMonth);
    }

    return (
        <>
        {/* // previous month */}
        <button onClick={()=>{changeMonth(viewMonth.getFullYear(), viewMonth.getMonth()-1)}}>Previous Month</button>
        {/* // next month  */}
        <button onClick={()=>{changeMonth(viewMonth.getFullYear(), viewMonth.getMonth()+1)}}>Next Month</button>
        </>
    )
}

/* ----------------------- creates a row from an array ---------------------- */
// displays the date in each cell
    function ArrayToRow({ array }) {
        return (
            <tr>
                {array.map(value => (
                    <td>{value!=="" && value.getDate()}</td>
                ))}
            </tr>
        )
    }

    /* -------------------- create table from array of arrays ------------------- */
    // each element in the array must be an array itself 


    function ArrayToTable({ array }) {
        return (
            <table>
                <tbody>
                    {array.map(rowArray => (
                        <ArrayToRow array={rowArray} />
                    ))}
                </tbody>
                
            </table>
        )
    }

    return (
        <div className="calendar-month">
            <h4>Set Deadline</h4>
            <ChangeMonth />
            <p>{viewMonth.toLocaleString( 'default', {month: 'long'})} {viewMonth.getFullYear()}</p>
            <ArrayToTable array={monthInWeeks()} />
        </div>
    )
}