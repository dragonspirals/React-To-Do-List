export default function Priority({ newTask, setNewTask }) {


    function setPriority(priority) {
        setNewTask(current => {
            return {...current, priority: priority }
        })
    }

    return (
        <>
            <label htmlFor="priority" className="form-item">Priority  </label>
            <select name="priority" value={newTask.priority} 
            className="form-item"
            onChange={e => {setPriority(e.target.value)}}>
                
                <option value={""} className="placeholder" defaultValue></option>
                {[1,2,3,4,5].map(value => (
                    <option key={"priority " + value} value={value}>{value}</option>
                ))}
            </select>
        </>
    )
}