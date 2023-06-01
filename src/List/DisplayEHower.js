
import React, { useState, useRef } from "react"


export default function DisplayEHower({ taskList }) {
    
    // an array containing all the marks representing tasks on the eisenhower matrix 
    const [eHowerMarks, setEHowerMarks] = useState([]);

    // div containing graph
    const boxRef = useRef(null);
    // bounding box for the graph
    

    function getMarks() {
        const marks = [];

        const boxBound = boxRef.current.getBoundingClientRect();


        taskList.forEach(task => {
            if (task.hasEHower) {
                const markX = (task.eHower[0]*boxBound.width)/100;
                const markY = (task.eHower[0]*boxBound.height)/100;

                marks.push([markX, markY]);
            }
        })

        setEHowerMarks(marks);
    }



    function PlotMarks() {


        return (
            eHowerMarks.map((value, index) => (
                <svg display="block" style={{transform: `translateY(-${index*100}%)`}} className="e-hower-plot"  height="100%" width="100%">
                    <circle cx={value[0]} cy={value[1]} r="2" stroke="black" stroke-width="2" fill="black" />
                </svg>
            ))
        )
    }

    

    return (
        <> 
        <button onClick={getMarks}>Plot Current Tasks</button> 
        <br /><br />     
        <div ref={boxRef} className = "clickable e-hower-div" >
            <PlotMarks />
        </div>
        <br />
        </>
    )
}