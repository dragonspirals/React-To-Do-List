import { useState, useRef } from "react";

export default function EHower({ newTask, setNewTask }) {


    // eHower is the percentage [urgency%, importance%] 
    const [eHower, setEHower] = useState([50, 50]);

    // [x,y] of the position of the mark depicting the e-hower matrix values (absolute)
    const [eHowerMark, setEHowerMark] = useState([null, null]);


    // mouse position relative to the eisenhower box 
    const [mouseInBox, setMouseInBox] = useState([null, null]);
    

    // update e-hower matrix to form component 
    function selectEHower() {

        setNewTask(task=> {
            return ({...task, eHower: eHower})
        })

        setEHowerMark(mouseInBox);
    }

    const boxRef = useRef(null);



    function mouseOver(e) {
        const boxBound = boxRef.current.getBoundingClientRect();

        // mouse position relative to the box element 
        const boxRelX = e.clientX - boxBound.x;
        const boxRelY = e.clientY - boxBound.y;
        setMouseInBox([boxRelX, boxRelY]);

        const eHowerX = parseInt(100-(100*boxRelX/boxBound.width));
        const eHowerY = parseInt(100-(100*boxRelY/boxBound.height));

        setEHower([eHowerX, eHowerY]);

    }


    return (
        <div className="set-e-hower"> 
            <p>The Eisenhower matrix is a system that prioritises tasks based on Urgency and Importance</p>       
            <div ref={boxRef} className = "clickable e-hower" onMouseMove={mouseOver} onClick={selectEHower}class="e-hower-div">
                <svg height="100%" width="100%">
                    <circle cx={eHowerMark[0]} cy={eHowerMark[1]} r="5" stroke="cyan" stroke-width="3" fill="blue" />
                </svg>
            </div>
            <p>Urgency: <b>{newTask.eHower[0]}%</b>, Importance: <b>{newTask.eHower[1]}%</b></p>
            <br />
        </div>
    )

}