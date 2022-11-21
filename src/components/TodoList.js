import React, { useState } from 'react'
import Sidebar from './sidebar';
import './toDoList.css';

export default function TodoList() {
    const [todos, setTodos] = useState([])
    const [task, setTask] = useState('')
    const [taskEditing, setTaskEditing] = useState(null)
    const [editingText, setEditingText] = useState('')

    const handleSubmit = (e)=>{
      e.preventDefault();

      const newTask = {
        id: new Date().getTime(),
        text: task,
        completed: false,

      }
      setTodos([...todos].concat(newTask))
      setTask(newTask)

    }
    const deleteTodo=(id)=>{
      const updatedTasks = [...todos].filter((task) => task.id !== id)
      setTask(updatedTasks)

    }
    const toggleComplete = (id)=>{
      const updatedTasks = [...todos].map((task) =>{
        if(task.id === id){
          task.completed = !task.completed
        }
        return task

      })
      setTodos(updatedTasks)

    }

    function submitEdits(id) {
      const updatedTask = [...todos].map((task) => {
        if(task.id === id) {
          task.text = editingText;

        }
        return task;
      });
      setTask(updatedTask);
      setTaskEditing(null);

    }

  return (
    
    <div className='app'>
      <Sidebar/>
    <form className='todo-form' onSubmit={handleSubmit}>
    
    <input className='add-task' type='text' placeholder = "Add task" value={task} onChange={(e) => setTask(e.target.value)}/>
      
    <button type='submit' >Add</button>

    </form>
    {todos.map((task)=> <div key={task.id}>

      {taskEditing === task.id ? ( <input type='text' 
      onChange={(e) => setEditingText(e.target.value)} value={editingText}/>)
      : (<div>{task.text}</div>)}

      <button onClick={()=> deleteTodo(task.id)} >Delete</button>
      <input className='check' type='checkbox' onChange={()=>toggleComplete(task.id)} checked={task.completed} />

       <button onClick={()=> setTaskEditing(task.id)}>Edit Task</button>


      </div> )}
      
    </div>
  );};