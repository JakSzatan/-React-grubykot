import React from "react"
import { useState } from "react";

  const Login = () => {
    

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const HandleSubmit = (event)=> {
        event.preventDefault();
        LoginRequest(email,password);
      }

      async function LoginRequest(email,password){
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              "username": email,
              "password": password})
        };
        const resp= await fetch('http://127.0.0.1:8000/login/', requestOptions)

        
            if (!resp.ok) {
            window.alert("Coś Poszło nie tak");
            }
            else{
                var json = await resp.json()
                await localStorage.setItem('token', json.token)
                window.history.pushState({}, '', "/");
                await window.location.reload(false);
            } 
            
    }

    const Test=()=>{
        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json',
            Authorization: "JWT "+localStorage.getItem('token'),
            },
        };
        fetch('http://127.0.0.1:8000/users/?format=json', requestOptions)
            .then(response => response.json())
            .then(data => console.log(data));
    }
   return(
        <div className="container px-5 mt-2">
            <form onSubmit={HandleSubmit}> 
            <h1>Sign In</h1>

            <div className="form-group">
            <label htmlFor="exampleInputEmail1" className="form-label mt-4">Email address</label>
            <input onChange={(e) => setEmail(e.target.value)} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>

            <div className="form-group">
            <label htmlFor="exampleInputPassword1" className="form-label mt-4">Password</label>
            <input onChange={(e) => setPassword(e.target.value)} type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
            </div>

            <div className="clearfix">
                <button type="submit" className="btn btn-primary mt-2">Sign In</button>
            </div>
            </form>
            <button onClick={()=>Test()}>test</button>
        </div>
  
   );
}

export default Login;