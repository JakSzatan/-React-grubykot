import React from "react"


export default class Carousel extends React.Component{
  
//tu consty i logika
      render(){
     //tu consty i logika
      return(
<div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner"style={{height:"400px",overflow:"hidden"}} >
    <div class="carousel-item active" data-bs-interval="2000">
      <img src="https://www.pitbulltattoothailand.com/app/uploads/2019/12/pitbull-tattoo-slider-004-1600.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src="https://thumbs.img-sprzedajemy.pl/1000x901c/81/e0/78/tatuaz-tattoo-studio-too-tattoo-pomorskie-gdansk-536453875.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src="https://lh3.googleusercontent.com/proxy/_5gwucWtL_wn_4sH-fBgk4aqYaR-q2MEp8Ry2k1knPyj3qNn2H7wCCeE8bl5rRkWyJrCrPPpcvT93x3g-RZW4rDVtyptP-AFev5j0qpqeILM_vhUeIUYrnEMD6BnwIY" class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
        );
      }
  }