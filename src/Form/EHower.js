import { useState, useRef, useEffect } from "react";

export default function EHower({ newTask, setNewTask }) {


    const boxRef = useRef(null);

    // eHower is the percentage [urgency%, importance%] 
    const [eHower, setEHower] = useState([50, 50]);

    // [x,y] of the position of the mark depicting the e-hower matrix values (absolute)
    const [eHowerMark, setEHowerMark] = useState([null, null]);

    useEffect(() => {
        if (boxRef.current) {
            const boxBound = boxRef.current.getBoundingClientRect();
            setEHowerMark([boxBound.width/2 , boxBound.height/2])
        }
    }, [])


    // mouse position relative to the eisenhower box 
    const [mouseInBox, setMouseInBox] = useState([null, null]);

    // default position for the marker (same as 50, 50)
    

    // update e-hower matrix to form component 
    function selectEHower() {

        setNewTask(task=> {
            return ({...task, eHower: eHower})
        })

        setEHowerMark(mouseInBox);
    }





    function mouseOver(e) {
        const boxBound = boxRef.current.getBoundingClientRect();

        // mouse position relative to the box element 
        const relativePosX = e.clientX - boxBound.x;
        const relativePosY = e.clientY - boxBound.y;
        setMouseInBox([relativePosX, relativePosY]);

        const eHowerX = parseInt(100-(100*relativePosX/boxBound.width));
        const eHowerY = parseInt(100-(100*relativePosY/boxBound.height));

        setEHower([eHowerX, eHowerY]);

    }


    return (
        <div className="set-e-hower"> 
            <p>The Eisenhower matrix is a system that prioritises tasks based on Urgency and Importance</p>       
            <div ref={boxRef} className = "clickable e-hower-div" onMouseMove={mouseOver} onClick={selectEHower}>
                <svg height="100%" width="100%">
                    <circle cx={eHowerMark[0] || 50} cy={eHowerMark[1] || 50} r="5" stroke="cyan" strokeWidth="3" fill="blue" />
                </svg>
            </div>
            <p>Urgency: <b>{newTask.eHower[0]}%</b>, Importance: <b>{newTask.eHower[1]}%</b></p>
            <br />
        </div>
    )

}