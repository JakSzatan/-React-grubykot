import React from "react"
import { Pic } from "./ball";
import html2canvas from 'html2canvas';
import { saveAs } from 'file-saver';

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
     Save(){
        html2canvas(document.querySelector("#canvas")).then(canvas => {
            canvas.toBlob(function(blob) {
                saveAs(blob, "Image.png");
            });
        });}


      render(){
        //wrap in iframe <i  className="bi bi-geo-alt text-primary ms-1 fs-5"></i>
      return(<div className="d-flex flex-column container justify-content-center">

          <div  className="mx-auto"><p><h3>Wybierz zdjęcie ciała</h3></p><input type='file' onChange={(e)=>this.loadpic2(e)}/> </div>
          <div className="mx-auto"><p><h3>Wybierz zdjęcie Wzoru</h3></p><input  type='file'  onChange={(e)=>this.loadpic(e)}/> </div>


                <div id="canvas" className="mx-auto" style={{backgroundImage:'url('+this.state.file2+")",width:"400px",height:"400px",border:"2px white solid"}}>
                    <Pic img={'url('+this.state.file+")"}/>
                    </div>
            <button className="mt-5 mb-5 mx-auto btn btn-success col-4" onClick={()=>this.Save()}>Zapisz</button>
          </div>);
      }
  }