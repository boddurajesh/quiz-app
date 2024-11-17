import React, { useState } from 'react';

import axios from 'axios';
import { Form } from 'react-router-dom';


function Login  () {

    const [Password, setPasswordValue] = useState("");
    const [userId, setUserIdValue] = useState("");


    const setPassword = (e)=>{
        setPasswordValue(e.target.value);
         
    }

    const setUserId =(e)=>{

        setUserIdValue(e.target.value);

    }

    const handleSubmit = async(e) =>{

        e.preventDefault();

        console.log("This your Data "+ userId + Password)

        const data ={
            "email" :userId,
            "password": Password
        }

        try{
            const response =  await axios.post("http://localhost:9192/auth/login",data);

            if(response.data == "false"){
                alert("Invalid user Id or Password");
            }
            else{
                alert("Login SuccessFull");
                window.location.href="/navbar";
                
            }
        } catch(error){
            console.error(error);
        }


    }

    const redirectToRegister =()=>{
        window.location.href="/register";
    }
   
    return (


        <>
        <h1>This is Login Page</h1>
        <div className="container">
         <form onSubmit={handleSubmit}>
            <label>User Id </label>
            <input type="email" placeholder="Enter User Id" value={userId} onChange={setUserId}/>

             <br></br>
             <br></br>
            <label>Password </label>
            <input type="password" placeholder="Enter your password" value={Password}    onChange={setPassword}/>

            <br></br>
            <br></br>

            <button type="submit">Login</button>

            <br></br>
            <br></br>

            <a onClick={redirectToRegister}>Register here, if new</a>

          

         </form>
        </div>

        </>

       
    )
}

export default Login;