import React from "react"


export default class Navbar extends React.Component{
  

      render(){
  
      return(   
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
        <a className="navbar-brand" href="#">
        <img style={{height:"40px"}} src="/GrubyKot.png"></img>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarColor02">
        <ul className="navbar-nav me-auto">
            <li className="nav-item ">
            <a className="nav-link effect-one" href="#">Home
                <span className="visually-hidden">(current)</span>
            </a>
            </li>
            <li className="nav-item ">
            <a className="nav-link effect-one" href="#">Cenny</a>
            </li>
            <li className="nav-item ">
            <a className="nav-link effect-one" href="#">O Nas</a>
            </li>
            <li class="nav-item dropdown ">
            <a class="nav-link dropdown-toggle effect-one" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Nasza Ekipa</a>
            <div class="dropdown-menu">
        <a class="dropdown-item" href="#">Ola</a>
        <a class="dropdown-item" href="#">Ania</a>
        <a class="dropdown-item" href="#">Krysia</a>
        <div class="dropdown-divider"></div>
        <a class="dropdown-item" href="#">Przemek</a>
        </div>
        </li>
        </ul>
        </div>
    </div>
    </nav>
      );
      }
      
  
  }