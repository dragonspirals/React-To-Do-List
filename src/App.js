
import './styles/App.css';
import React, { useState } from 'react'
import Form from './Form/Form';
import DisplayTasks from './List/DisplayTasks';
import DisplayCompleted from './List/DisplayCompleted';

function App() {

  const [taskList, setTaskList] = useState([]);



  /* -------------------------------- set task -------------------------------- */
  function addTask(task) {
    setTaskList(currentList => {
      return ([...currentList, task])
    })
    if (taskList.length > 0) {
    }
  }


  const editTask = (index, attribute, value) => {
    const newTask=taskList[0];
    newTask[attribute]=value;
    var newList = [...taskList];
    newList.splice(index, 1, newTask);
    setTaskList(newList);
  
  }

  function resetList() {
    const newList = [];;
    setTaskList(newList);
  }


  /* ---------------------------- return statement ---------------------------- */
  return (
    <div className="App">
      <header className="App-header">
        <h1>To Do List</h1>        
      </header>


      {/* form  */}
      <Form addTask={addTask}/>

      <button onClick={resetList} >Clear All</button>

      <DisplayTasks taskList={taskList} editTask={editTask} />

      <br></br>
      <DisplayCompleted taskList={taskList} />

    </div>
  );
}

export default App;
