import { useState, useEffect, useRef } from "react";

export default function DisplayEHower({ taskList }) {

    const boxRef = useRef(null);

    const [boxSize, setBoxSize] = useState([0.3*window.innerWidth, 0.3*window.innerWidth]);

    useEffect(() => {
        setBoxSize([boxRef.current.clientWidth, boxRef.current.clientHeight])
    }, [])


    function PlotMark({ task, taskIndex, boxSize }) {
        
        const markX = ((100-task.eHower[0])*boxSize[0])/100;
        const markY = ((100-task.eHower[1])*boxSize[1])/100;


        return (
            <svg display="block" style={{transform: `translateY(-${taskIndex*100}%)`}} className="e-hower-plot"  height="100%" width="100%">
                <circle cx={markX} cy={markY} r="2" stroke="black" strokeWidth="2" fill="black" />
            </svg>
        )
    }



    return (
        <div ref={boxRef} className = "clickable e-hower-div" >
            {taskList.map((element, index) => (
                element.hasEHower && <PlotMark key={element.id + "mark"} task={element} taskIndex={index} boxSize={boxSize}/>
            ))}
        </div>
    )
}