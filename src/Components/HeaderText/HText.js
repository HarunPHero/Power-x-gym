import { Button } from "@mui/material";
import React from "react";
import './HText.css'

const HText = () => {
  return (
    <div>
     
      <div className="row banner-t container-fluid">
        {/* <div className="col-md-7">
          <h1>THE BEST FITNESS STUDIO IN TOWN</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam,
            blanditiis.
          </p>
          <Button variant="contained">Buy Now</Button>
        </div>
        <div className="col-md-5">
          <img className="banner" src="Logo, Icon/green.png" alt="" />
        </div> */}
        <div id="banner-1" className="row  d-flex align-items-center m-3">
          <div className="col-md-7 ">
            <p className="banner-text">
              THE BEST FITNESS STUDIO IN TOWN
            </p>
            <p className="text-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, natus! Aliquid corporis aspernatur fugiat, et, rerum corrupti iste labore in reiciendis a modi quaerat incidunt laudantium consequatur est. Asperiores, vel!</p>
            <a className="btn btn-warning" href="/price">
              JOIN US
            </a>
          </div>
          <div className="col-md-5 mt-5">
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default HText;
