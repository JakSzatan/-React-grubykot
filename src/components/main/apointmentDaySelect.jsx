import React from "react"
import Apointment from "./apointment";


export default class apointmentDaySelect extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            TattooArtist:[],
            ArtistId:0,
            selectedType:"",
            selectedTypeValue:0
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
        this.handleChange3 = this.handleChange3.bind(this); 
     }

     handleChange(event) {    
         this.setState({date: Date.parse(event.target.value)});
        }
    handleChange2(event){
        this.setState({ArtistId: event.target.value});
        }
    handleChange3(event){
            this.setState({selectedType: event.target.options[event.target.selectedIndex].text,
                selectedTypeValue:event.target.value});
            }

    async componentDidMount(){
            const requestOptions = {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
            };
            const resp= await fetch('http://127.0.0.1:8000/tattoo', requestOptions)
            const data = await resp.json()
                if (resp.ok) {
                  this.setState({TattooArtist:data})
                }

        }

      render(){

      return(<div className="mt-5 container">
        
          <div className="form-label">Typ Sesji</div>
              <select name="artist" className="col-4 form-select " onChange={this.handleChange3} >
            <option value={0}>--wybierz--</option>
            <option  value={2}>Konsultacja</option>
            <option value={6}>Sesja</option>
            <option  value={3}>Poprawki</option>
              </select>
          
              <div className="form-label mt-2">Artysta</div>
            <select name="artist" className="col-4 form-select" onChange={this.handleChange2} >
            <option key={9999} value={0}>--wybierz--</option>)
            {this.state.TattooArtist.map(option => <option key={option.id} value={option.id}>{option.first_name}</option>)}
              </select>
              <div className="form-label mt-2">Termin</div>
          <input className="col-12 text-center" type="date" onChange={this.handleChange} defaultValue={new Date().toISOString().slice(0, 10)} min={new Date().toISOString().slice(0, 10)}/>
          <Apointment Type={this.state.selectedType} value={this.state.selectedTypeValue} date={this.state.date} ArtistId={this.state.ArtistId}/>
      </div>);
      }
  }