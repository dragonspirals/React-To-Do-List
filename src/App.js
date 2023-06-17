
import './styles/styles.css';
import React, { useState, useEffect } from 'react'
import Form from './Form/Form';
import DisplayTasks from './List/DisplayTasks';
import DisplayCompleted from './List/DisplayCompleted';
import DisplayEHower from './List/DisplayEHower';

function App() {

  // const [taskList, setTaskList] = useState([]);
  const [taskList, setTaskList] = useState(() => {

    // get taskList if there are tasks stored in localStorage
    const jsonList = localStorage.getItem("storeTaskList");

    // returns empty array if jsonList is []
    if (jsonList === "[]") {
      console.log("empty list")
      return []
    }
    const initialValue=JSON.parse(jsonList);
    return initialValue || []
  });


  // const [storage, setStorage] = useState(() => {
  //   const saved = localStorage.getItem("name");
  //   const initialValue=JSON.parse(saved);
  //   return initialValue || "";
  // });



  useEffect(() => {
    localStorage.setItem('storeTaskList', JSON.stringify(taskList));
  }, [taskList]);


  /* -------------------------------- set task -------------------------------- */
  function addTask(task) {
    setTaskList(currentList => {
      return ([...currentList, task])
    })
    if (taskList.length > 0) {
    }
  }


  const editTask = (index, attribute, value) => {
    const newTask=taskList[index];
    newTask[attribute]=value;
    var newList = [...taskList];
    newList.splice(index, 1, newTask);
    setTaskList(newList);
  
  }

  function resetList() {
    const newList = [];
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

      


      <main>
        <button onClick={resetList} >Clear All</button>

        <br /><br />
        <DisplayTasks taskList={taskList} editTask={editTask} />

        <br></br>
        <DisplayCompleted taskList={taskList} />

        <DisplayEHower taskList={taskList} editTask={editTask}/>
      </main>
      

    </div>
  );
}

export default App;
