import React, { useState } from 'react';
import './login.css'
import person from '../images/person.png'
import email from '../images/email.png'
import password from '../images/password.png'


function Login (){

    const[email, setEmail] = useState('')
    const[password,setPassword] = useState('')
    const[errorEmail, setErrorEmail] = useState(false)
    const[errorPassword, setErrorPassword] = useState(false)
    const [details,setDetails] = useState({
        email:"",
        password:""
    })

    function authenticate (e){
            const {name,value} = e.target
            setDetails({
            ...details,//spread operator
            [name]:value
            })
            console.log(details)
        if(!/\S+@\S+\.\S+/.test(details.email)){
            setErrorEmail(true)
        }
        else{
            setErrorEmail(false)
        }
    }
    const validatePassword =(e)=>{
        const {name,value} = e.target
        setDetails({
        ...details,//spread operator
        [name]:value
        })
        console.log(details)
    if (details.password.length <= 8){ 
        setErrorPassword(true)
    }
    else{
        setErrorPassword(false)
    }

    }
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
                        <input name='email' onChange={authenticate} type='text' placeholder='Enter email address'className='name'/>
                        {errorEmail && <i style={{fontSize:"11px", color:"red"}}>Valid email is required</i>}
                    </div>
                    <div className='passwordinput'>
                    {/* <p2 className='email'>Password</p2> */}

                        <img src={password} alt='password' className='mail'/>
                        <input name='password' onChange={validatePassword} type='password' placeholder='Enter password'className='name'/>
                        {errorPassword && <i style={{fontSize:"11px", color:"red"}}>Password must be more than 8 characters</i>}
                    </div>
                    <div className='loginbtn'>
                    <button disabled={errorEmail && errorPassword} >Login</button>
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