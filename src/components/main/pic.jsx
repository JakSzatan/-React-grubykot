import React from "react"
import { Pic } from "./ball";

export default class pic extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            file: "",
            file2: "",
        };
    }
    loadpic(event){
        this.setState({file:URL.createObjectURL(event.target.files[0])})
     }
     loadpic2(event){
        this.setState({file2:URL.createObjectURL(event.target.files[0])})
     }
      render(){
        //wrap in iframe
      return(<div>
          <input type='file' onChange={(e)=>this.loadpic(e)}/>
          <input type='file' onChange={(e)=>this.loadpic2(e)}/> 
            <div style={{backgroundImage:'url('+this.state.file2+")",width:"400px",height:"400px"}}>
                <Pic img={'url('+this.state.file+")"}/>
                </div>
          </div>);
      }
  }