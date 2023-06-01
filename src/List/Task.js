import CompleteTask from "./CompleteTask"

// display one task 
export default function Task({ task, editTask, taskList }) {
    return (
        <tr className="task-row">

        {/* //     <td className="checkbox">
        //         <input type="checkbox" value={task.completed} />
        //     </td> */}

            <td className = "task-cell checkbox-div">
                <CompleteTask task={task} taskList={taskList} editTask={editTask} />
            </td>

            <td className="task-name">
                <p>{task.name}</p>
            </td>

            <td className="task-e-hower">
                {(task.hasEHower) && <p>({task.eHower[0]},{task.eHower[1]})</p>}
            </td>

            <td className="task-priority">
                {(task.priority !== "") && <p>{task.priority}</p>}
            </td>

            <td className="task-deadline">
                {(task.hasDeadline) 
                && <p>{task.deadline.getDate()}/{task.deadline.getMonth()+1}/{task.deadline.getFullYear()}</p>}
            </td>


        {/*      <td className="task-deadline">
                 <p>{task.deadline}</p>
             </td>

             <td className="task-priority">
                <p>{task.priority}</p>
             </td> */}
        </tr>
    )
}