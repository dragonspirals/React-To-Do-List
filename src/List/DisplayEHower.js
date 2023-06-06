
import { useState, useEffect, useRef } from "react";

export default function DisplayEHower({ taskList }) {
    

    const boxRef = useRef(null);

    const [boxSize, setBoxSize] = useState([0.3*window.innerWidth, 0.3*window.innerWidth]);

    useEffect(() => {
        setBoxSize([boxRef.current.clientWidth, boxRef.current.clientHeight])
    }, [])


    function PlotMarks({ taskList }) {


        // marks will keep a list of the position of the marks
        const marks = [];

        taskList.forEach(task => {
            if (task.hasEHower && boxRef.current) {
                const markX = ((100-task.eHower[0])*boxSize[0])/100;
                const markY = ((100-task.eHower[1])*boxSize[1])/100;

                marks.push([markX, markY]);
            }
        })


        


        function PlotMark({markPos, markIndex}) {


            return (
                <>
                <svg display="block" style={{transform: `translateY(-${markIndex*100}%)`}} className="e-hower-plot"  height="100%" width="100%">
                    <circle cx={markPos[0]} cy={markPos[1]} r="2" stroke="black" stroke-width="2" fill="black" />
                </svg>
                </>
            )
        }



        return (
            marks.map((newMark, index) => (
                <>
                <PlotMark markPos={newMark} markIndex={index} />
                </>
            ))
        )
    }

    

    return (
        <>      
        <div ref={boxRef} className = "clickable e-hower-div" >
            {boxRef && <PlotMarks taskList={taskList} boxSize={0.3*window.innerWidth}/>}
        </div>
        <br />
        </>
    )
}