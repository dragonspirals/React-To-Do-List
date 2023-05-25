import Calendar from "./Calendar";

export default function Deadline({ newTask, setNewTask }) {

    const today = new Date();

    

    function setDeadline(attribute, value) {
        var updatedDate = newTask.deadline;
        if (attribute==="date") {
            updatedDate.setDate(value);
        } else if (attribute==="month") {
            updatedDate.setMonth(value);
        } else if (attribute==="year") {
            updatedDate.setFullYear(value);
        }


        setNewTask(task=> {
            return ({...task, deadline: new Date(updatedDate.getFullYear(), updatedDate.getMonth(), updatedDate.getDate())})
        })
    }



    function GenerateOptions({ start, step, number }) {
        var optionArray = [];

        for (let i=0; i<number; i++) {
            const value = start + (step*i);
            optionArray.push(value)
        }

        return (
            optionArray.map(value => (
                <option key={"option-" + value}value={value}>{value}</option>
            ))
        )
    }

    function Day() {
        return (
            <>
            <label> Day </label>
            <select value={newTask.deadline.getDate()} onChange={(e) => {setDeadline("date", e.target.value)}}>
                <GenerateOptions start={1} step={1} number={31} />
            </select>
            </>
        )
    }
    


    function Month() {
        const months=["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
        return (
            <>
            <label> Month </label>
            <select value={newTask.deadline.getMonth()} onChange={(e) => {setDeadline("month", e.target.value)}}>
                {months.map(value => (
                <option key={"option-" + value}value={months.indexOf(value)}>{value}</option>
            ))}
            </select>
            </>
        )
    }

    function Year() {
        return (
            <>
            <label> Year </label>
            <select value={newTask.deadline.getFullYear()} onChange={(e) => {setDeadline("year", e.target.value)}}>
                <GenerateOptions start={today.getFullYear()} step={1} number={10} />
            </select>
            </>
        )
    }

    return (
        <>
        <Day />
        <Month />
        <Year />
        <Calendar />
        </>
    )
}