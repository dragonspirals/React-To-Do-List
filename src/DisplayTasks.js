
import Task from "./Task";

export default function DisplayTasks({ taskList }) {


    return (
        <table className="display-task-list">
            <tbody>
                {taskList.map(task => (
                    <Task key={task.id} task={task} />
                ))}
            </tbody>
            
        </table>
    )
}