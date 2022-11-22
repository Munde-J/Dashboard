import React from 'react';
import "../../././App.css";
import TodoList from '../TodoList';
// import About from './about';
import { Outlet } from 'react-router-dom';
import Sidebar from "/home/student/Desktop/dashboard/src/components/sidebar.js";

// import TodoList from '../TodoList';


const Dashboard = () => {
    return(
    <div className='dash'>  
  
        <h1>To Do List</h1>
        <Sidebar/>
    </div>


    )
}
export default Dashboard;



