import React from "react"


export default class MainPage extends React.Component{
  
      render(){
      return(<div>
          <div className="container mt-5">      
          <div data-aos="fade-up" className="mb-5">
            <h2>News</h2>
            Jakieś Newsy
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus tempus sapien, placerat mattis lacus maximus eu. Donec sollicitudin leo auctor metus suscipit aliquet. Sed eget commodo est. Vestibulum dapibus nunc ut turpis suscipit placerat. Ut euismod mauris a odio lobortis, id consectetur massa tincidunt. Ut ut luctus libero. Quisque a luctus lacus, et convallis urna. Etiam cursus, mi eu aliquam mattis, turpis mauris sagittis orci, id aliquet odio tortor vel diam. Sed vitae metus nec enim facilisis tristique. Aliquam pulvinar enim sodales diam tincidunt faucibus. Morbi quis lectus lorem. Fusce eleifend mauris a odio lobortis, non venenatis justo maximus. 
            </p>
              <hr/>
          </div>
          <div data-aos="fade-up" className="mb-5">
            <h2  id="Ceny">Ceny</h2>
            Tutaj pojawi się cennik
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus tempus sapien, placerat mattis lacus maximus eu. Donec sollicitudin leo auctor metus suscipit aliquet. Sed eget commodo est. Vestibulum dapibus nunc ut turpis suscipit placerat. Ut euismod mauris a odio lobortis, id consectetur massa tincidunt. Ut ut luctus libero. Quisque a luctus lacus, et convallis urna. Etiam cursus, mi eu aliquam mattis, turpis mauris sagittis orci, id aliquet odio tortor vel diam. Sed vitae metus nec enim facilisis tristique. Aliquam pulvinar enim sodales diam tincidunt faucibus. Morbi quis lectus lorem. Fusce eleifend mauris a odio lobortis, non venenatis justo maximus. 
            </p>
              <hr/>
          </div>
          <div data-aos="fade-up" className="mb-5">
            <h2  id="About">Info</h2>
            <h4 className="ps-5">Info o studiu</h4>
            <p className="overflow-auto">
            <img data-aos="slide-right" style={{height :"200px"}} className="float-start rounded" src="https://i.postimg.cc/NfvZwj12/244622249-866020767609897-3784407638343700036-n.jpg"/>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Mauris tempus tempus sapien, placerat mattis lacus maximus eu. Donec sollicitudin leo auctor metus suscipit aliquet. Sed eget commodo est. Vestibulum dapibus nunc ut turpis suscipit placerat. Ut euismod mauris a odio lobortis, id consectetur massa tincidunt. Ut ut luctus libero. Quisque a luctus lacus, et convallis urna. Etiam cursus, mi eu aliquam mattis, turpis mauris sagittis orci, id aliquet odio tortor vel diam. Sed vitae metus nec enim facilisis tristique. Aliquam pulvinar enim sodales diam tincidunt faucibus. Morbi quis lectus lorem. Fusce eleifend mauris a odio lobortis, non venenatis justo maximus. 
            </p>
            
            <hr/>
          </div>
        </div>
          <div data-aos="fade" className="container mb-4">
          <h2 >Contact Us</h2>
          <hr/>
          <div>
              Mochnackiego 3/5
              Olsztyn, 10-036
              Polska
              <span><a href=""><i  className="bi bi-geo-alt text-primary ms-1 fs-5"></i></a></span>
          </div>
          <span><a href=""><i  className="bi bi-facebook text-primary me-2 fs-5"></i></a></span>
          <span><a href="" style={{color:"#e95950"}}><i className="bi bi-instagram me-2 fs-5"></i></a></span>
          <span ><a href=""><i  className="bi bi-envelope me-2 fs-5"></i></a></span>
          <div style={{color:"#fccc63"}}><i className="bi bi-telephone me-2 fs-5"></i>501 201 222</div>
          </div>
      </div>);
      }
  }