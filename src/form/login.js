import React from 'react';
import './login.css'
import person from '../images/person.png'
import email from '../images/email.png'
import password from '../images/password.png'


function Login (){
    return(
    <div className='container1'>
        <div className='container-1'>
            <div>
                <div className='image'>
                    <div className='imagecontainer'>
                        <img src={person} alt='person' className='profile'/>
                    </div>
                </div>
                <div>
                    <h1>Login</h1>
                    <div>
                    {/* <p2 className='email'>Email</p2> */}
                        <img src={email} alt='email' className='mail'/>
                        <input type='text' placeholder='Email address'className='name'/>
                    </div>
                    <div className='passwordinput'>
                    {/* <p2 className='email'>Password</p2> */}

                        <img src={password} alt='password' className='mail'/>
                        <input type='text' placeholder='Enter password'className='name'/>
                    </div>
                    <div className='loginbtn'>
                    <button>Login</button>
                    </div>

                        <p className='link'>
                            <a href='#'>Forgot password?</a> Or <a href='#'>Sign Up</a>
                        </p>
                   
                </div>
            </div>

        </div>
    </div>
    );

}

export default Login;