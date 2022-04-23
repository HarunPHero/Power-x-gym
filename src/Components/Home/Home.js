import React from "react";
import "../Header/Header.css";

import "./Home.css";
import logo1 from "./Icon/Group 80-min.png";
import logo2 from "./Icon/Group 81-min.png";
import logo3 from "./Icon/Group 82-min.png";
import buider from "../../images/Image-Icon/wells-chan-H-vAxuWxmi8-unsplash-min.jpg";
import body from "../../images/Image-Icon/Group 87-min.png";
import cycle from "../../images/Image-Icon/Group 88-min.png";
import gift from "../../images/Image-Icon/gift-2-min.png"
import HText from "../HeaderText/HText";
import Header from "../Header/Header";

const Home = () => {
  return (
    <div className="home">
        <section className="banner Header">
         
           <HText></HText>
          </section>
      <section className="categories m-5">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          <div className="col">
            <div className="card h-100 progression">
              <img src={logo1} className="card-img-top w-25 logo" alt="..." />
              <div className="card-body">
                <h1 className="card-title text-center text-warning">PROGRESSION</h1>
                <p className="card-text text-center text-light">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolores, sunt.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100 workout">
              <img src={logo2} className="card-img-top w-50 logo" alt="..." />
              <div className="card-body">
                <h1 className="card-title text-center text-warning mt-4">
                  WORKOUT
                </h1>
                <p className="card-text text-center text-light">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolores, sunt.
                </p>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card h-100 nutrition">
              <img src={logo3} className="card-img-top w-25 logo" alt="..." />
              <div className="card-body">
                <h1 className="card-title text-center text-warning">NUTRITION</h1>
                <p className="card-text text-center text-light">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolores, sunt.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="about">
        <div className="row  d-flex align-items-center p-5 m-5">
          <div className="col-md-5">
            <img src={buider} className="d-block w-75" alt="..." />
          </div>
          <div className="col-md-7 ">
            <h1 className="about text-dark">About us</h1>
            <h3 className="dream">WE ARE HERE TO DREAM!</h3>
            <h3 className="surving-message">OUR TEAM IS HERE SURV YOU.</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
              mollitia omnis neque voluptates ipsum doloribus voluptatum ullam,
              doloremque at aspernatur sapiente asperiores. Voluptatum amet
              totam quos maxime nam distinctio commodi rem quas doloremque
              vitae? Quasi rem quam quisquam? Excepturi, optio.
            </p>
          </div>
        </div>
      </section>
      <section id="trainings">
        <h1 className="text-center text-warning"> <span className="text-dark"> Training </span>Programs</h1>
        <div className="row row-cols-1 row-cols-md-2 g-4 m-3">
          <div className="card-1 card mb-3">
            {/* <img src="..." className="card-img-top" alt="..." /> */}
            <div className="card-body">
              <p className="card-text">
                <a className="btn btn-warning" href="/">YOGA TRAINING SESSION →
                </a>
                  
              </p>
            </div>
          </div>
          <div className="card-2 card mb-3">
            {/* <img src="..." className="card-img-top" alt="..." /> */}
            <div className="card-body">
             
              <p className="card-text">
                <a className="btn btn-warning" href="/">CARDIO TRAINING SESSION →
                </a>
                  
              </p>
              
            </div>
          </div>
        </div>
      </section>
      <section id="why" className="m-5">
        <h1 className="text-warning text-center">WHY CHOOSE US</h1>
      <div className="row row-cols-1 row-cols-md-3 g-4 mt-3">
  <div className="col">
    <div className=" h-100 shadow-lg p-3 mb-5 bg-body rounded">
      <img src={body} className="card-img-top w-25" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">FREE FITNESS TRAINING</h5>
        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, harum. Cumque deleniti tempora laudantium illum neque, provident exercitationem quod officiis.</p>
      </div>
      
    </div>
  </div>
  <div className="col">
    <div className="card h-100 shadow-lg p-3 mb-5 bg-body rounded">
      <img src={cycle} className="card-img-top w-25" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">TONS OF CARDIO & STRENGTH</h5>
        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, harum. Cumque deleniti tempora laudantium illum neque, provident exercitationem quod officiis.</p>
      </div>
     
    </div>
  </div>
  <div className="col">
    <div className="card h-100 shadow-lg p-3 mb-5 bg-body rounded">
      <img src={gift}className="card-img-top w-25" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">NO COMMENTS MEMBERSHIPS</h5>
        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, harum. Cumque deleniti tempora laudantium illum neque, provident exercitationem quod officiis.</p>
      </div>
      
    </div>
  </div>
</div>

      </section>
    </div>
  );
};

export default Home;
