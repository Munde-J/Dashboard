import React from 'react';
import "../../././App.css";
import TodoList from '../TodoList';
import Sidebar from "/home/student/Desktop/dashboard/src/components/sidebar.js";

// import TodoList from '../TodoList';


const Dashboard = () => {
    return(
    
    <div className='header'>  
    <Sidebar/>
        <h1>To Do List</h1>
        <TodoList/>
    </div>
    )
}
export default Dashboard;



