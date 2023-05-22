

// display one task 
export default function Task({ task }) {
    return (
        <tr className="task">

        {/* //     <td className="checkbox">
        //         <input type="checkbox" value={task.completed} />
        //     </td> */}

            <td className="task-name task-cell">
                <p>{task.name}</p>
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