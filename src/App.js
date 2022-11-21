import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/dashboard/about";
import Dashboard from "./components/dashboard/Dashboard";
import TodoList from "./components/TodoList";
import Login from "./form/Login";

const App =() => {
  return(
   <BrowserRouter>
         {/* <Login /> */}
 
   <Routes>
    <Route exact path="/dashboard" element={<Dashboard/>}/>
    {/* <Route exact path="/dashboard" element={<Dashboard/>}/> */}
    <Route exact path="/todolist" element={<TodoList/>}/>
    <Route exact path="/about" element={<About/>}/>
    <Route exact path="/" element={<Login/>} />

   </Routes>

   </BrowserRouter>
    
  );
};

export default App;


