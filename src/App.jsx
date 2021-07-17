
import "bootswatch/dist/cyborg/bootstrap.min.css";
import Navbar from "./components/navbar/navbar";
import Carousel from "./components/carusel/carusel";
import "./customstyle.css"

const App = () =>{

    return(
        <div>
            
            <Navbar/>
           
            <Carousel/>
            <div className="container mt-5">
            <h2>Contact Us</h2>
            <hr/>
            <div className="container">
            <div>
                Mochnackiego 3/5
                Olsztyn, 10-036
                Polska
                <span><i  class="bi bi-geo-alt text-primary ms-1 fs-5"></i></span>
            </div>
            
            <span><i  class="bi bi-facebook text-primary me-2 fs-5"></i></span>
            <span style={{color:"#e95950"}}><i class="bi bi-instagram me-2 fs-5"></i></span>
            
            <span ><i  class="bi bi-envelope me-2 fs-5"></i></span>
            <div style={{color:"#fccc63"}}><i class="bi bi-telephone me-2 fs-5"></i>501 201 222</div>
            </div>
            </div>

        </div>
        
    );
}

export default App;