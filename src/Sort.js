import Task from './Task'

export default function Sort(props) {


    function SortByPriority() {
        const priority1 = [];
        const priority2 = [];
        const priority3 = [];
        const priorityNone = [];

        props.taskList.forEach(task => {
            if (task.priority === 1) {
                priority1.push(task);
            } else if (task.priority === 2) {
                priority2.push(task);
            } else if (task.priority === 3) {
                priority3.push(task);
            } else {
                priorityNone.push(task);
            }
        })


        return (
            <>
            <ShowList list={priority1} />
            <ShowList list={priority2} />
            <ShowList list={priority3} />
            <ShowList list={priorityNone} />
            </>
        )

    }

    function ShowList(props) {props.list.map(item => (
        <>
        <Task name={item.name} priority={item.priority}/>
        </>
        ))}


    return (
        <>
        <ShowList list={props.taskList}/>
        <SortByPriority />
        </>
    )
}
