import React from 'react';
import Sidebar from "/home/student/Desktop/dashboard/src/components/sidebar.js";

//import login from '../form/login;
import './about.css'
const About = () => {
    return(

    <div>
                    <Sidebar/>
        <div className='about'>
        <h1>About</h1>
        </div>
        <div className='cards'>
            <div className='card1'>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
            <div className='card2'>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
            <div className='card3'>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
        </div>
    </div>
    
    )
}
export default About;