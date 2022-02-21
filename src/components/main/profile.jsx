import React from "react"
import { Link } from "react-router-dom";

export default class Profile extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            apo:[],
            Name:[{first_name:"Ładowanie",last_name:"Ładowanie"}]
        };
    }
    async componentDidMount(){
        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json',
            Authorization: localStorage.getItem("token")}
        };
        const resp= await fetch('http://127.0.0.1:8000/profile', requestOptions)
        const data = await resp.json()
            if (resp.ok) {
              this.setState({apo:data})
            }
        const resp2= await fetch('http://127.0.0.1:8000/profileName', requestOptions)
        const data2 = await resp2.json()
            if (resp2.ok) {
                this.setState({Name:data2})
            }

    }
      render(){
      return(
      <div className="container mt-5">
        <div>
        
        <h3>Imie: {this.state.Name[0].first_name}
        <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" className="ms-4 btn btn-secondary"><i  className="bi bi-pen text-Light ms-1 fs-5"></i></button></h3>
        
        <h3>Nazwisko: {this.state.Name[0].last_name}
        <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" className="ms-4 btn btn-secondary"><i  className="bi bi-pen text-Light ms-1 fs-5"></i></button></h3>



        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Edytuj Profil</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div>
            Imie
            <input type="text" />
        </div>
        <div>
            Nazwisko
            <input type="text" />
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Anuluj</button>
        <button type="button" class="btn btn-primary">Zapisz</button>
      </div>
    </div>
  </div>
</div>

        <h3>Zarezerwowane wizyty:</h3>
        </div> 
          <div className="d-flex flex-row flex-wrap">
              {this.state.apo.map((item,index)=><div className="p-2 mx-auto m-1 col-4 apoView" key={index}>
                  {item.type} {new Date(item.dateStart).toLocaleString()}
                      <Link to="/apo"><button className="ms-4 btn btn-secondary"><i  className="bi bi-pen text-Light ms-1 fs-5"></i></button></Link>
                  </div>)}
          </div>
      </div>
      );
      }
  }