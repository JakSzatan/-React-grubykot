import React, { useState }  from 'react';



const Register = () => {


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setconfirmPassword] = useState("");
    const [firstName, setfirstName] = useState("");
    const [lastName, setlastName] = useState("");
    const [phoneNumber, setphoneNumber] = useState("");

    function handleSubmit(event) {
        event.preventDefault();
        RegisterRequest(email,password,confirmPassword,firstName,lastName,phoneNumber);
        
      }
    
      async function RegisterRequest (email,password,confirmPassword,firstName,lastName,phoneNumber){
        const apiUrl = "http://127.0.0.1:8000/register/";
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json' }, 
            body: JSON.stringify({
                "username": email,
                "password": password,
                //"email": confirmPassword,
                // "firstName": firstName,
                // "lastName": lastName,
                // "phoneNumber": phoneNumber,
            }
            )        
        };
       const resp= await fetch(apiUrl, requestOptions);
       if (!resp.ok) {
        window.alert("Coś Poszło nie tak");
        }
        else{
            window.history.pushState({}, '', "/");
            await window.location.reload(false);
        }     
    }

   return(
    
        <div className="container px-5 mt-2">
            <form onSubmit={handleSubmit}>
            <h1>Sign Up</h1>
            <p>Please fill in this form to create an account.</p>
            <hr></hr>


            <div className="form-group">
            <label htmlFor="exampleInputPassword1" className="form-label mt-4">Email</label>
            <input onChange={(e) => setEmail(e.target.value)} type="text" className="form-control" id="exampleInputPassword1" placeholder="Email"/>
            </div>
            <div className="form-group">
            <label htmlFor="exampleInputPassword1" className="form-label mt-4">Password</label>
            <input onChange={(e) => setPassword(e.target.value)} type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
            </div>
            <div className="form-group">
            <label htmlFor="exampleInputPassword1" className="form-label mt-4">Confirm Password</label>
            <input onChange={(e) => setconfirmPassword(e.target.value)} type="password" className="form-control" id="exampleInputPassword1" placeholder="Confirm Password"/>
            </div>
            {/* <label htmlFor="firstname"><b>First Name</b></label>
            <input onChange={(e) => setfirstName(e.target.value)} className="RegisterInput" type="text" placeholder="Enter First Name" name="firstname" required/>
            
            <label htmlFor="lastname"><b>Last Name</b></label>
            <input onChange={(e) => setlastName(e.target.value)} className="RegisterInput" type="text" placeholder="Enter Last Name" name="lastname" required/>
            
            <label htmlFor="PhoneNumber"><b>Phone Number</b></label>
            <input onChange={(e) => setphoneNumber(e.target.value)}  className="RegisterInput" type="text" placeholder="Enter Phone Number" name="PhoneNumber" required/>

            <label>
                <input type="checkbox" checked="checked" name="remember" style={{"marginBottom":"15px"}}/> Remember me
            </label> */}

            <p>By creating an account you agree to our <a href="#" style={{"color":"dodgerblue"}}>Terms and Privacy</a>.</p>

            <div className="clearfix">
                <button type="submit" className="btn btn-primary mt-2">Sign Up</button>
            </div>
            </form>
        </div>
  
   );
}

export default Register;