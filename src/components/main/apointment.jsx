import React from "react"


export default class apointment extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            apointments: [],
            selectedDate:"",
        };
     }
    async makeApointment(){
        if(this.props.ArtistId===0)return
        if(this.props.value<=0)return
        if(this.state.selectedDate==="")return
        var date = new Date(this.state.selectedDate)

        date= date.setHours(this.state.selectedDate.getHours(),
        this.state.selectedDate.getMinutes()+(30*this.props.value))

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json',
            Authorization: localStorage.getItem("token") },
            body:JSON.stringify({
                "artist": parseInt(this.props.ArtistId),
                "dateStart": this.state.selectedDate.toISOString(),
                "dateEnd": new Date(date).toISOString(),
                "type": this.props.Type
            })
        };
        const resp= await fetch('http://127.0.0.1:8000/makeapointment', requestOptions)
            if (resp.ok) {
                alert("Udało się umówić")
                window.history.pushState({}, '', "/");
                window.location.reload(false);
            } 
     }
     async componentDidUpdate(prevProps) {
        if(this.props.ArtistId!==prevProps.ArtistId){
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json',
            Authorization: localStorage.getItem("token") },
            body:JSON.stringify({"artist": parseInt(this.props.ArtistId)})
        };
        const resp= await fetch('http://127.0.0.1:8000/apointments', requestOptions)
        const data = await resp.json()
            if (resp.ok) {
              this.setState({apointments:data})
            }
        }
    }
      render(){
        console.log(this.state.apointments)
        let terminy=[];
        for (let index = 0; index < 17; index++) {
            var today = new Date(this.props.date);
            today.setHours(10, 0+(index*30), 0, 0);
            var hidden=false;
            this.state.apointments.forEach(item=>{
                if (today>=new Date(item.dateStart)&&today<=new Date(item.dateEnd) ) {
                    hidden=true
                }
            })
            terminy.push({date:today,hide:hidden})
        }
        for (let index = 0; index < terminy.length; index++){
            if(!terminy[index].hide){
                for(let i = 0; i < this.props.value; i++) {
                    if (index+i<terminy.length) {
                        if(terminy[index+i].hide){
                            terminy[index].hide=true;
                            break;
                        }  
                    }
                }
            }
        }

      return(<div>
            {terminy.map((item,index)=>
                <div onClick={()=>{this.setState({selectedDate:item.date})}} tabIndex={index} className="TerminBut" style={item.hide?{visibility: "hidden"}:{}} key={index}>
                    {item.date.getHours()}.{item.date.getMinutes()/10}0
                </div>
            )}
            <button onClick={()=>this.makeApointment()}>aa</button>
      </div>);
      }
  }