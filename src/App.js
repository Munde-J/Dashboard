import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/dashboard/about";
import Dashboard from "./components/dashboard/dashboard";
import Sidebar from "./components/sidebar";

const App =() => {
  return(
   <BrowserRouter>
   <Sidebar>
   <Routes>
    <Route path="/"element={<Dashboard/>}/>
    <Route path="/dashboard"element={<Dashboard/>}/>
    <Route path="/about"element={<About/>}/>
   </Routes>
   </Sidebar>
   </BrowserRouter>
    
  );
};

export default App;


