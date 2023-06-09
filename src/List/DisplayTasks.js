
import Task from "./Task";

export default function DisplayTasks({ taskList, editTask }) {


    return (
        <table className="display-task-list">
            <thead>
                <tr className="task-row">
                    <th className="checkbox-div">Completed</th>
                    <th className="task-name">Task</th>
                    <th className="task-e-hower">(Urgency, Importance)</th>
                    <th className="task-priority">Priority</th>
                    <th className="task-deadline">Deadline</th>
                </tr>
            </thead>
            <tbody>
                {taskList.map(task => (

                    // conditional rendering if the task is not completed
                    (!task.completed) && <Task key={"task" + task.id} task={task} editTask={editTask} taskList={taskList}/>
                ))}
            </tbody>
        </table>
    )
}