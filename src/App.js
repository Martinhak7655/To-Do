import './App.css';
import { useState } from 'react';

function App() {

  const[task, setTask] = useState([]);
  const [newTask, setNewTask] = useState("");

  function addTask() {
    setTask([...task, newTask]);
    console.log(newTask);
    setNewTask("")
  }

  function Delete(index) {
    const updatedTasks = [...task];
    updatedTasks.splice(index, 1);
    setTask(updatedTasks)
  }

  return (
    <div className="App">
      <h1>React js To-Do</h1>
      <b>{newTask}</b>
      <input
        type='text'
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button className='to-do-but' onClick={addTask}>Add</button>
      {task.map((tasks, index) => (
        <div key={index} className='map'>
          {tasks}
          <button className='to-do-but' onClick={() => Delete(index)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default App;
