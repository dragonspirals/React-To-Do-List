import { useState, useRef } from "react";
import graph from "../images/asana-eisenhower.webp"

export default function EHower({ newTask, setNewTask }) {

    const [eHower, setEHower] = useState([50, 50]);
    

    // update e-hower matrix to form component 
    function selectEHower() {

        setNewTask(task=> {
            return ({...task, eHower: eHower})
        })
    }

    const boxRef = useRef(null);



    function mouseOver(e) {
        const boxBound = boxRef.current.getBoundingClientRect();

        // mouse position relative to the box element 
        const boxRelX = e.clientX - boxBound.x;
        const boxRelY = e.clientY - boxBound.y;

        const eHowerX = parseInt(100-(100*boxRelX/boxBound.width));
        const eHowerY = parseInt(100-(100*boxRelY/boxBound.height));

        setEHower([eHowerX, eHowerY]);
    }


    return (
        <>
        <img src={graph} ref={boxRef} className = "e-hower" onMouseMove={mouseOver} onClick={selectEHower} />
        </>
    )

}