import React from 'react';
import axios from 'axios';

function Register  () {

      

    const [register, setRegister] = React.useState({
        name :"",
        email :"",
        password :"",
    });

    const handleChange =(e)=>{
        setRegister({
              ...register,
              [e.target.name]:e.target.value
        })
    }

    const handleSubmit = async(e)=>{
        e.preventDefault();
        console.log(register);

        try{

            const response =  await axios.post('http://localhost:9192/auth/signup', register);
            alert("User registered Succesfully");
        }catch(error){
            console.log(error);

        }
    }


   
    return (

       <div className="container">
        <form onSubmit={handleSubmit}>
             <h2>Register</h2>
             <label >Name</label>
             <input type="text"  name="name" placeholder="Enter your Name" value={register.name} onChange={handleChange}></input>
             <br></br>
             <br></br>

             <label for="email">Email</label>
             <input typr="email" name="email" placeholder="Enter Your Email" value={register.email} onChange={handleChange}></input>

             <br></br>
             <br></br>

             <label for="password">Password</label>
             <input typr="password" name="password" placeholder="Enter Your Password" value={register.password} onChange={handleChange}></input>

             <br></br>
             <br></br>

             <button type="submit">Register</button>



        </form>

       </div>
    )
}

export default Register;