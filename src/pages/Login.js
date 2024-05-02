
import './Login.css';
import { useState } from 'react';

import { useNavigate } from 'react-router';
import { NavLink } from 'react-router-dom';

function Login(){

    const naviagate=useNavigate();
    const [password,setPassword]=useState("");
    const [email,setEmail]=useState("");
    async function postData(e){
        e.preventDefault();
        const data={password,email}
            console.log(data)
            const res=   await fetch("http://localhost:9000/login",{
            method:"post",
            body:JSON.stringify(data),
            headers:{
                "content-type":"application/json"
            },
            credentials:'include'
        })
        console.log('hi')

        console.log(res);
        if(res.status===200){
            naviagate('/Profile')
        }

        
    }




    return(

        <>
        
        <div>
              


                <div className='main-login'>

                    <div className='login-img'> 
                      <h1>

                    Welcome to Login page
                </h1> 

                    </div>


                <div  className="Login-box">    

                    <form action="">
                    Password:
                    <input type="text"
                    
                    onChange={(e)=>{
                            setPassword(e.target.value);
                    }}  
                    placeholder="Enter Password"/>
                    Email:

                    <input type="text" 
                    onChange={(e)=>{
                        setEmail(e.target.value)
                    }}
                    placeholder="Enter Email"/>
                    <br />

                    <button  
                      onClick={(e)=>{
                        postData(e);
                      }}
                    className='login-btn' >Sing In </button>
                    </form>

                    <div className='p'>
                    <p>Forget UserName/Password</p>
                    <NavLink to={'/SingUp'}>Don't have an account? Sing Up</NavLink>
                    </div>
                   



                </div>

                </div>


        </div>
        
        
        </>
    )
}


export default Login;
