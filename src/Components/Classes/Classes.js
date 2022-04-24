import React from "react";

const className = (props) => {
  return (
    <div>
      <div className="col">
        <div className="h-100">
          
          <div className=" text-center card-body"><img src={props.img} className="card-img-top" alt="..." />
            <a href="/" className="btn btn-warning text-center" >{props.name} →</a>
          </div>
          
        </div>
      </div>
    </div>
  );
 
};

export default className;
