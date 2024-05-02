import './SingUp.css';
import { useState } from 'react';
import { useNavigate } from 'react-router';
function SingUp() {
    const naviagate=useNavigate();

    const[name,setName]=useState();
    const[email,setEmail]=useState();
    const[address,setAddress]=useState();
    const[phoneNumber,setPhoneNumber]=useState();
    const[password,setPassword]=useState();
    const[cpassword,setCPassword]=useState();
    const[img,setImg]=useState();


   async function postdata(e){
       e.preventDefault();
         const formdata=new FormData();
        formdata.append("img",img);
        formdata.append("name",name);
        formdata.append("email",email);
        formdata.append("address",address);
        formdata.append("phoneNumber",phoneNumber);
        formdata.append("password",password);
        formdata.append("cpassword",cpassword);


         const response=await fetch('http://localhost:9000/signup',{
           method:"POST",
           body: formdata,
        })
        console.log("REsponse hgfvkjh->",response)
        if(response.status===200){
            naviagate('/Login');

        }else{
            alert(" there is issue with sing Up",response)
        }
    }

    return (
        <>
        

            <div className='main-singup'>


                <div className='singup-img'>
                <h1>Welcome to SingUp Page</h1>

                </div>


                <div className="Sing-up-form">


                    <form action="/signup"  encType="multipart/form-data">
                        image:
                        <br/>
                         <input type="file" 
                          onChange={(e)=>{
                            setImg(e.target.files[0]);
                          }}
                         name="img"/>
                         <br/>

                        Name:
                        <br/>
                        <input type="text"  

                        onChange={(e)=>{
                            setName(e.target.value)
                            
                        }}


                        placeholder="Enter Name"/>
                        <br/>

                        <label htmlFor="">
                            Phone Number:
                        </label>
                        <br/>


                        <input type="Number"
                           onChange={(e)=>{
                            setPhoneNumber(e.target.value)
                            
                        }} placeholder="Enter Phone Number"/>
                        <br/>
                        <label htmlFor="">
                            Email:
                        </label><br/>
                        <input type="text"    onChange={(e)=>{
                            setEmail(e.target.value)
                            
                        }} placeholder="Enter Email"/><br/>

                        Address:
                        <br/>

                        <input type="text" 

                            onChange={(e)=>{
                                setAddress(e.target.value)
                            }}


                         placeholder="Enter Address"/>
                        <br/>


                        Password:
                        <br/>
                        <input type="text" 
                         onChange={(e)=>{
                            setPassword(e.target.value)
                        }}
                        placeholder='ENter Password'/>

                        <br/>
                        Conform Password:
                        <br/>
                        <input type="text" onChange={(e)=>{
                                setCPassword(e.target.value);

                                
                            }} 
                            placeholder=' conform Password'
                            />
                        <br/>

                        <button  onClick={(e)=>{
                            postdata(e);

                        }} className="Sing-up">
                            Sing Up</button>

                    </form>

                </div>


            </div>


        </>
    )
}


export default SingUp;
