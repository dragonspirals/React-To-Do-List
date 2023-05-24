import CompleteTask from "./CompleteTask"

// display one task 
export default function Task({ task, editTask, taskList }) {
    return (
        <tr className="task-row">

        {/* //     <td className="checkbox">
        //         <input type="checkbox" value={task.completed} />
        //     </td> */}

            <td className = "task-cell checkbox-div">
                <CompleteTask task={task} taskList={taskList} editTask={editTask}/>
            </td>

            <td className="task-name">
                <p>{task.name}</p>
            </td>

            {(task.priority !== "") 
            && <td className="task-priority"><p>{task.priority}</p></td>}

        {/*      <td className="task-deadline">
                 <p>{task.deadline}</p>
             </td>

             <td className="task-priority">
                <p>{task.priority}</p>
             </td> */}
        </tr>
    )
}