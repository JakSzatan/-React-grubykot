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
return(
        <div className="container px-5 mt-2">
            <form onSubmit={HandleSubmit}> 
            <h1>Zaloguj się</h1>
            <div className="form-group">
            <label htmlFor="exampleInputEmail1" className="form-label mt-4">Email</label>
            <input onChange={(e) => setEmail(e.target.value)} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="email"/>
            </div>
            <div className="form-group">
            <label htmlFor="exampleInputPassword1" className="form-label mt-4">Hasło</label>
            <input onChange={(e) => setPassword(e.target.value)} type="password" className="form-control" id="exampleInputPassword1" placeholder="Hasło"/>
            </div>
            <div className="clearfix">
                <button type="submit" className="btn btn-primary mt-2">zaloguj</button>
            </div>
            </form>
        </div>
  );
}

export default Login;