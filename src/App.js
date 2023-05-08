
import './App.css';
import React from 'react'
import AllTasks from "./AllTasks.js"

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <h1>To Do List</h1>        
      </header>


      <div className = "To-do-list">
        
        <AllTasks/>
      </div>


    </div>
  );
}

export default App;
