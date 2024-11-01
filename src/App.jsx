import { useState } from 'react'
function App() {

  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim() === "") {
      return;
    }
    setTasks([...tasks, { text: task, completed: false }]);
    setTask("");
  }

  const ToggleTask = (index) => { 
    const updatedTasks=tasks.map((t, i) => (
      i===index?{...t,completed: !t.completed}:t 
    ) )
    setTasks(updatedTasks); 
  }
  const deleteTask = (index) => {
    const filterTasks = tasks.filter((t, i) => (
      i!==index 
    ))
    setTasks(filterTasks);
  }
  return (

    <>
      <div className='flex items-center justify-center flex-col gap-12'>
      <h1 className='text-4xl text-center'>To Do App</h1>
      <div className='flex'>
      <input type="text" value={task}  placeholder='Task' className='border border-red-500 rounded-l-full rounded-r-none pl-3 focus:border-red-500 focus:outline-none' onChange={(e)=>setTask(e.target.value)}/>
        <button className='px-4 py-2 bg-red-700 rounded-r-full rounded-l-none text-white' onClick={addTask}>Add</button>
        </div>
        <ul className='w-full max-w-md'>
          {tasks.map((t, i) => (
             <li key={i} className={`flex justify-between items-center p-2 border-b ${t.completed?"line-through text-gray-400":""}`}>
             <span onClick={()=>ToggleTask(i)}>{t.text}</span>
             <button className='px-4 py-2 text-red-500 rounded-md' onClick={()=>deleteTask(i)}>Delete</button>
           </li>
          ))
           
          }
          
        </ul>
        </div>
    </>
  )
}

export default App
