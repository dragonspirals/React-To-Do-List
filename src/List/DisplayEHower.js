import { useState, useEffect, useRef } from "react";

export default function DisplayEHower({ taskList, editTask }) {

    const boxRef = useRef(null);

    const [boxSize, setBoxSize] = useState([0.3*window.innerWidth, 0.3*window.innerWidth]);

    useEffect(() => {
        setBoxSize([boxRef.current.clientWidth, boxRef.current.clientHeight])
    }, [])

    const [currentTask, setCurrentTask] = useState();


    const eHowerList = taskList.filter(task => task.hasEHower)


    function checkHover(e) {



        if (boxRef.current) {
            const boxBound = boxRef.current.getBoundingClientRect();  
            
            taskList.forEach((task, index) => {

                const markX = ((100-task.eHower[0])*boxSize[0])/100;
                const markY = ((100-task.eHower[1])*boxSize[1])/100;


                if ((Math.abs(boxBound.x + markX - e.clientX) < 5) && (Math.abs(markY + boxBound.y - e.clientY) < 5)) {
                    setCurrentTask(task.name);
                    editTask(index, "isCurrent", true );
                } else {
                    editTask(index, "isCurrent", false );
                }
            });
        }
        
    }



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
        <>
        <p>{currentTask}</p>
        <div onMouseMove={e => {checkHover(e)}} ref={boxRef} className = "clickable e-hower-div" >
            {eHowerList.map((element, index) => (
                element.hasEHower && <PlotMark key={element.id + "mark"} task={element} taskIndex={index} boxSize={boxSize}/>
            ))}
        </div>
        </>

    )
}