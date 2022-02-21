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
                "first_name": firstName,
                "last_name": lastName,
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
            <h1>Zarejestruj się</h1>
            <p>Wypełnij ten formularz, aby utworzyć konto.</p>
            <hr></hr>


            <div className="form-group">
            <label htmlFor="exampleInputPassword1" className="form-label mt-4">Email</label>
            <input onChange={(e) => setEmail(e.target.value)} type="text" className="form-control" id="exampleInputPassword1" placeholder="Email"/>
            </div>
            <div className="form-group">
            <label htmlFor="exampleInputPassword2" className="form-label mt-4">Hasło</label>
            <input onChange={(e) => setPassword(e.target.value)} type="password" className="form-control" id="exampleInputPassword2" placeholder="Hasło"/>
            </div>
            <div className="form-group">
            <label htmlFor="exampleInputPassword3" className="form-label mt-4">Potwierdź Hasło</label>
            <input onChange={(e) => setconfirmPassword(e.target.value)} type="password" className="form-control" id="exampleInputPassword3" placeholder="Potwierdź Hasło"/>
            </div>
            <div className="form-group">
            <label htmlFor="exampleInputPassword4" className="form-label mt-4">Imie</label>
            <input onChange={(e) => setfirstName(e.target.value)} type="text" className="form-control" id="exampleInputPassword4" placeholder="Imie"/>
            </div>
            <div className="form-group">
            <label htmlFor="exampleInputPassword5" className="form-label mt-4">Nazwisko</label>
            <input onChange={(e) => setlastName(e.target.value)}  type="text" className="form-control" id="exampleInputPassword5" placeholder="Nazwisko"/>
            </div>

            <div className="clearfix">
                <button type="submit" className="btn btn-primary mb-2 mt-2">Zarejestruj</button>
            </div>
            </form>
        </div>
  
   );
}

export default Register;