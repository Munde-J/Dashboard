import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/dashboard/about";
import Dashboard from "./components/dashboard/Dashboard";
import TodoList from "./components/TodoList";
import Sidebar from "./components/sidebar";
import Login from "./form/Login";

const App =() => {
  return(
   <BrowserRouter>
     
   <Routes>
    
     <Route  path="/" element={<Login/>}/> 

   
     <Route path="/Dashboard" element={<Dashboard/>}/> 

    <Route path="/TodoList" element={<TodoList/>}/>
    <Route path="/About" element={<About/>}/>


   </Routes>

   

   </BrowserRouter>
    
  );
};

export default App;


