
import './written-styles/App.css';
import React, { useState } from 'react'
import Form from './Form/Form';
import DisplayTasks from './DisplayTasks';

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

  /* ---------------------------- return statement ---------------------------- */
  return (
    <div className="App">
      <header className="App-header">
        <h1>To Do List</h1>        
      </header>


      {/* form  */}
      <Form addTask={addTask}/>


      <DisplayTasks taskList={taskList}/>

    </div>
  );
}

export default App;
