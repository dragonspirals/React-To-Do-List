import { useState } from "react"
function CompletedTasks({ taskList }) {
    return (
        taskList.map(task => { return (
            (task.completed) && ((
                <tr key={task.id}>
                    <td className="checkbox-div"></td>
                    <td className="task-name">{task.name}</td>
                    <td className="task-priority">{task.priority}</td>
                </tr>
            ))
        )
        })
    )
}


// display completed tasks with a button to show/hide completed tasks
export default function DisplayCompleted({ taskList }) {

    const [show, setShow] = useState(false);

    
    return (
        <>

        <button onClick={()=>{setShow(!show)}}>{show ? "Hide" : "Show"} Completed Tasks</button>
        
        <br /> <br />
        {(show) && 
        <table className="display-task-list">
            <tbody>
                <CompletedTasks taskList={taskList} />
            </tbody>
        </table>}
        </>
    )
    
    
}