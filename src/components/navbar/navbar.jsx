import React from "react"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

export default class Navbar extends React.Component{
   

    async logout(){
      await localStorage.removeItem("token")
      window.history.pushState({}, '', "/");
      await window.location.reload(false);
    }

      render(){
  
      return(   
    <nav className={this.props.stick?"navbar navbar-expand-lg navbar-dark bg-dark":"navbar navbar-expand-lg navbar-dark bg-dark fixed-top"}>
    <div className="container-fluid">
        <Link className="navbar-brand" to="/">
        <img style={{height:"40px"}} src="/GrubyKot.png"></img>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarColor02">
        <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link effect-one">Home</Link>
                <span className="visually-hidden">(current)</span>
            </li>
            <li className="nav-item ">
            <Link to="/#Ceny" className="nav-link effect-one">Ceny</Link>
            </li>
            <li className="nav-item ">
            <Link to="/#About" className="nav-link effect-one">O Nas</Link>
            </li>
            <li className="nav-item dropdown ">
            <Link className="nav-link dropdown-toggle effect-one" data-bs-toggle="dropdown" to="/" role="button" aria-haspopup="true" aria-expanded="false">Nasza Ekipa</Link>
            <div className="dropdown-menu">
        <Link className="dropdown-item" to="/">Ola</Link>
        <Link className="dropdown-item" to="/">Krysia</Link>
        <Link className="dropdown-item" to="/">Marcin</Link>
        <div className="dropdown-divider"></div>
        <Link className="dropdown-item" to="/">Przemek</Link>
        </div>
        </li>
        </ul>
        
        
        {localStorage.getItem("token")?
        <div className="navbar-nav">
        <Link to="/" onClick={()=>this.logout()} className="nav-link effect-one">Wyloguj</Link>
        </div>
        :
        <div className="navbar-nav">
        <Link to="/login" className="nav-link effect-one">Zaloguj</Link>
        <Link to="/register" className="nav-link effect-one">Zarejestruj</Link>
        </div>
        }


        </div>
    </div>
    </nav>
      );
      }
      
  
  }