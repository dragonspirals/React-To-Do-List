

export default function CompleteTask({ task, completeFn }) {


    function completeTask() {
        completeFn(task);
    }

    return (
        <input type="checkbox" onChange={completeTask}></input>
    )
}