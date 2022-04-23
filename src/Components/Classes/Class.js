import React, { useEffect, useState } from "react";
import "../Header/Header.css";
import Classes from "./Classes";
import "./Class.css";

const Class = () => {
  const [classes, setclasses] = useState([]);

  useEffect(() => {
    fetch("/output.json")
      .then((res) => res.json())
      .then((data) => setclasses(data));
  }, []);
  return (
    <>
      <div className="Header className">
        <h1 className="text-light text-center">OUR classes</h1>
      </div>
      <div className="row row-cols-1 row-cols-md-3 g-4 m-5">
        {classes.map((data) => (
          <Classes key={data.id} name={data.category} img={data.img}></Classes>
        ))}
      </div>
    </>
  );
};

export default Class;
