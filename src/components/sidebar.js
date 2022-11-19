import React, { useState } from "react";
import "../App.css";
import { FaTh, FaUserAlt, FaBars}from "react-icons/fa"
import { NavLink } from "react-router-dom";

const Sidebar = ({children}) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen)

    const menuItem = [
        {
            path:"/",
            name:"Dashboard",
            icon:<FaTh/>,
        },
        {
            path:"about",
            name:"About",
            icon:<FaUserAlt/>,
        },

    ]
    return (
        <div className="container">
            <div style={{width: isOpen ? "250px" : "50px"}} className="sidebar">
                <div className="top-section">
                    <h1 style={{display: isOpen ? "block" : "none"}} className="logo">Logo</h1>
                    <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                        <FaBars onClick={toggle}/>
                    </div>
                    {
                        menuItem.map((item, index) =>(
                        <NavLink to = {item.path} key = {index} className="link" activeclassName="active">
                            <div className="icon">{item.icon}</div>
                            <div style={{display: isOpen ? "block" : "none"}} className="link-text">{item.name}</div>
                        </NavLink>

                        ))
                    }

                </div>
                <main>{children}</main>
            </div>    
        </div>
    );
};

export default Sidebar;