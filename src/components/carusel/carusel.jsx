import React from "react"


export default class Carousel extends React.Component{
  
      render(){
      return(
<div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner"style={{height:"500px",overflow:"hidden"}} >
    <div className="carousel-item active" data-bs-interval="2000">
      <img src="https://www.pitbulltattoothailand.com/app/uploads/2019/12/pitbull-tattoo-slider-004-1600.jpg" className="d-block w-100 carouselImg" alt="..."/>
    </div>
    <div className="carousel-item" data-bs-interval="2000">
      <img src="https://images.unsplash.com/photo-1541121514895-0f36e7d38d14?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80" className="d-block w-100 carouselImg" alt="..."/>
    </div>
    <div className="carousel-item" data-bs-interval="2000">
      <img src="https://images.unsplash.com/photo-1605647533135-51b5906087d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" className="d-block w-100 carouselImg" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
        );
      }
  }