

export default function CompleteTask({ task, taskList, editTask}) {


    function markComplete() {
        editTask(taskList.indexOf(task), "completed", true)
    }

    


    return (
        <input className="checkbox" type="checkbox" onClick={markComplete} />
    )
}